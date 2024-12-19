'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CustomCardProps {
  videoUrl: string
  caption: string
  author: {
    username: string
    avatar: string
  }
  likes: number
  shares: number
  postId: string
}

export default function CustomCard({
  videoUrl,
  caption,
  author,
  likes,
  shares,
  postId,
}: CustomCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [shareCount, setShareCount] = useState(shares)
  const [isUpdating, setIsUpdating] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const updateSanityField = async (field: 'likes' | 'shares') => {
    if (isUpdating) return // Prevent multiple API requests
    setIsUpdating(true)

    const newValue = field === 'likes' ? likeCount + 1 : shareCount + 1

    try {
      const response = await fetch('/api/update-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
        body: JSON.stringify({
          postId,
          field,
          value: newValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update ${field}: ${response.statusText}`)
      }
      console.log(response);
      

      // Update local state after a successful API call
      if (field === 'likes') setLikeCount(newValue)
      if (field === 'shares') setShareCount(newValue)
    } catch (error) {
      console.error('Error updating Sanity field:', error)
      alert(`Error updating ${field}. Please try again.`)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="relative w-full md:w-[25vw] max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video Section */}
      <div className="relative aspect-auto bg-gray-100">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          loop
          playsInline
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
        />
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={togglePlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center mb-2">
          <Image
            src={author.avatar}
            alt={author.username}
            width={40}
            height={40}
            className="rounded-full h-[44px] w-[44px]"
          />
          <div className="ml-2">
            <h3 className="font-semibold">{author.username}</h3>
            <p className="text-sm text-gray-500">{caption}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateSanityField('likes')}
            disabled={isUpdating}
          >
            <Heart className="w-5 h-5 mr-1" />
            {likeCount}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateSanityField('shares')}
            disabled={isUpdating}
          >
            <Share2 className="w-5 h-5 mr-1" />
            {shareCount}
          </Button>
        </div>
      </div>
    </div>
  )
}
