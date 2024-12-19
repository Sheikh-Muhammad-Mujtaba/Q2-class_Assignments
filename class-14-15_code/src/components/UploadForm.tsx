'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function UploadForm() {
  const [caption, setCaption] = useState('')
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoFile) return alert('Please select a video file!')

    setUploading(true)

    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('video', videoFile)
    formData.append('userId', 'user-id') // Replace with actual logged-in user ID

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        alert('Video uploaded successfully!')
        setCaption('')
        setVideoFile(null)
      } else {
        alert(data.error || 'Upload failed. Please try again.')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      />
      <Input
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
        required
      />
      <Button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Video'}
      </Button>
    </form>
  )
}
