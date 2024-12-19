import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import fetch from 'node-fetch'
import { writeFile } from 'fs/promises'
import path from 'path'
import os from 'os'

// Initialize Sanity client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-11-20',
})

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData()
    const caption = formData.get('caption') as string
    const userId = 'e93f3fb6-e3c3-4f5e-be10-55da3b76cfe6'
    const videoFile = formData.get('video') as File

    if (!videoFile || !videoFile.name || videoFile.size === 0) {
      return NextResponse.json({ success: false, error: 'Invalid video file provided' }, { status: 400 })
    }

    if (!userId) {
        return NextResponse.json({ success: false, error: 'Invalid user ID' }, { status: 400 });
      }
      

    // Use dynamic temp directory
    const tempDir = os.tmpdir()
    const tempFilePath = path.join(tempDir, videoFile.name)
    const buffer = Buffer.from(await videoFile.arrayBuffer())

    // Write file to the temp directory
    await writeFile(tempFilePath, buffer)

    // Fix for Node.js 18+ fetch
    globalThis.fetch = fetch

    // Upload video to Sanity
    const asset = await sanityClient.assets.upload('file', createReadStream(tempFilePath), {
        filename: videoFile.name,
        fetch: (url, options) => fetch(url, { ...options, duplex: 'half' }),
      });
      

    // Create video document in Sanity
    const newPost = await sanityClient.create({
      _type: 'videoPost',
      caption,
      video: {
        _type: 'file',
        asset: { _ref: asset._id },
      },
      author: {
        _type: 'reference',
        _ref: userId, 
      },
      likes: 0,
      shares: 0,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, data: newPost })
  } catch (error) {
    console.error('Error uploading video:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
