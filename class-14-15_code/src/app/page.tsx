import { sanityClient } from '@/lib/sanity.client'
import BottomNav from '@/components/BottomNav'
import CustomCard from '@/components/CustomCard'
import Header from '@/components/Header'

/**
 * Fetch video posts from Sanity
 */

export const revalidate = 0;
async function getVideoPosts() {
  // Adding cache-control headers to ensure the fetch doesn't cache the data
  return await sanityClient.fetch(`
    *[_type == "videoPost"] {
      _id,
      caption,
      "videoUrl": video.asset->url,
      "author": author->{
        username,
        "avatar": avatar.asset->url
      },
      likes,
      shares,
      createdAt
    }
  `) 
}

/**
 * Main Home Page Component
 */
export default async function Home() {
  const videoPosts = await getVideoPosts()

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16 px-[16px]">
          {videoPosts.map((post: {
            _id: string
            videoUrl: string
            caption: string
            author: {
              username: string
              avatar: string
            }
            likes: number
            shares: number
          }) => (
            <CustomCard
              key={post._id}
              postId={post._id} 
              videoUrl={post.videoUrl}
              caption={post.caption}
              author={post.author}
              likes={post.likes}
              shares={post.shares}
            />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  )
}
