import { NextRequest, NextResponse } from 'next/server';
import { unlink, createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import os from 'os';
import FormData from 'form-data';

const sanitizeFilename = (filename: string) => filename.replace(/[^a-zA-Z0-9._-]/g, '_');

const uploadFileToSanity = async (filePath: string, fileName: string) => {
  const form = new FormData();
  form.append('file', createReadStream(filePath), fileName);

  const response = await fetch(
    `https://paaodj51.api.sanity.io/v2023-11-20/assets/files/production?filename=${encodeURIComponent(fileName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        ...form.getHeaders(),
      },
      body: form,
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Failed to upload file: ${response.status} - ${response.statusText}\n${errorBody}`
    );
  }

  return await response.json();
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const videoFile = formData.get('video') as File;

    if (!videoFile || videoFile.size === 0) {
      throw new Error('Invalid or empty file provided.');
    }

    const tempFilePath = path.join(os.tmpdir(), sanitizeFilename(videoFile.name));

    const buffer = Buffer.from(await videoFile.arrayBuffer());
    await writeFile(tempFilePath, buffer);

    try {
      const result = await uploadFileToSanity(tempFilePath, videoFile.name);

      return NextResponse.json({ success: true, result });
    } finally {
      unlink(tempFilePath, (err) => {
        if (err) console.error(`Failed to delete temp file: ${err.message}`);
      });
    }
  } catch (error: any) {
    console.error('File upload error:', error);

    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
};
