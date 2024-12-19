import { sanityClient } from '@/lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

// Define the structure of the user profile data
interface ProfileData {
  _id: string
  username: string
  bio: string
  avatar: { asset: { _ref: string } }
}

// Create a builder for resolving Sanity image URLs
const builder = imageUrlBuilder(sanityClient)
const resolveSanityImageUrl = (ref: string) => builder.image(ref).url()

// Fetch the user profile data
async function getUserProfile(): Promise<ProfileData | null> {
  const query = `
    *[_type == "user"][0] {
  _id,
  username,
  bio,
  "avatar": avatar.asset->url,
}

  `
  const profile = await sanityClient.fetch(query)
  return profile
}

// The ProfilePage component
export default async function ProfilePage() {
  const profile = await getUserProfile()

  // If no profile data is found
  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Profile Not Found</h1>
          <p className="text-gray-500 mt-2">The user profile you are looking for does not exist.</p>
        </div>
      </div>
    )
  }

  // Resolve the avatar URL
  const avatarUrl = resolveSanityImageUrl(profile.avatar)

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
          <div className="relative">
            <Image
              src={avatarUrl}
              alt={`${profile.username}'s avatar`}
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover h-[120px] w-[120px]"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {/* Bio Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
            <p className="text-gray-600 mt-2">{profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
