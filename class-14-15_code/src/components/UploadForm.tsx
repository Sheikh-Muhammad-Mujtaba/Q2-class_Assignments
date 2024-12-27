'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function UploadForm() {
  const [caption, setCaption] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!videoFile) {
      setError('Please select a video file!');
      return;
    }

    if (!videoFile.type.startsWith('video/')) {
      setError('Selected file is not a valid video.');
      return;
    }

    setError(null);
    setUploading(true);

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('video', videoFile);
    formData.append('userId', 'user-id'); // Replace with actual logged-in user ID

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Video uploaded successfully!');
        setCaption('');
        setVideoFile(null);
      } else {
        setError(data.error || 'Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label htmlFor="caption" className="block text-sm font-medium">
        Caption
      </label>
      <Textarea
        id="caption"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
        disabled={uploading}
      />

      <label htmlFor="video" className="block text-sm font-medium">
        Upload Video
      </label>
      <Input
        id="video"
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
        required
        disabled={uploading}
      />
      {videoFile && (
        <p className="text-sm text-gray-500">
          Selected File: <span className="font-medium">{videoFile.name}</span>
        </p>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Video'}
      </Button>
    </form>
  );
}
