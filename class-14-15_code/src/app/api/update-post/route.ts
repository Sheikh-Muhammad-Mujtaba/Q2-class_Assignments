import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity.client';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postId, field, value } = body;

    if (!postId || !field || value === undefined) {
      return NextResponse.json({ message: 'Invalid request payload' }, { status: 400 });
    }

    // Perform the Sanity update
    await sanityClient
      .patch(postId)
      .set({ [field]: value })
      .commit();

    return NextResponse.json({ message: 'Post updated successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating post:', error);
    return NextResponse.json({ message: 'Failed to update post', error: error.message }, { status: 500 });
  }
}
