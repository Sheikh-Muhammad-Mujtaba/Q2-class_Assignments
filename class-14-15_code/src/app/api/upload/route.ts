import { NextRequest, NextResponse } from 'next/server';
import { unlink, createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import os from 'os';
import FormData from 'form-data';

// Sanitize filename to avoid potential issues with unsafe characters
const sanitizeFilename = (filename: string) => filename.replace(/[^a-zA-Z0-9._-]/g, '_');

// Function to upload file to Sanity
const uploadFileToSanity = async (filePath: string, fileName: string) => {
  const form = new FormData();
  form.append('file', createReadStream(filePath), fileName);

  const formData: any = form; // Cast to any to satisfy TypeScript

  const response = await fetch(
    `https://paaodj51.api.sanity.io/v2023-11-20/assets/files/production?filename=${encodeURIComponent(fileName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        ...form.getHeaders(),
      },
      body: formData as BodyInit, // Cast to BodyInit explicitly
    }
  );

  // Check if the response is OK, if not throw an error
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to upload file: ${response.status} - ${response.statusText}\n${errorBody}`);
  }

  // Return the result from Sanity API
  return await response.json();
};

// Main POST handler for uploading the file
export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const videoFile = formData.get('video') as File;

    // Validate if the file is empty or missing
    if (!videoFile || videoFile.size === 0) {
      throw new Error('Invalid or empty file provided.');
    }

    const sanitizedFileName = sanitizeFilename(videoFile.name);
    const tempFilePath = path.join(os.tmpdir(), sanitizedFileName);

    // Convert the file to a buffer and write it to a temporary file
    const buffer = Buffer.from(await videoFile.arrayBuffer());
    await writeFile(tempFilePath, buffer);

    try {
      // Upload the file to Sanity
      const result = await uploadFileToSanity(tempFilePath, sanitizedFileName);

      // Return the successful response from Sanity
      return NextResponse.json({ success: true, result });
    } catch (error: any) {
      // Log any errors related to file upload to Sanity
      console.error('Error during file upload to Sanity:', error.message);

      // Return the error response with status 500
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to upload file to Sanity' },
        { status: 500 }
      );
    } finally {
      // Ensure the temporary file is deleted even if there is an error
      unlink(tempFilePath, (err) => {
        if (err) console.error(`Failed to delete temp file: ${err.message}`);
      });
    }
  } catch (error: any) {
    // Catch any unexpected errors and log them
    console.error('File upload error:', error.message);

    // Return the error response
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
};
