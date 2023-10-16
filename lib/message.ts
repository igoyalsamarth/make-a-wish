import { NewPost } from "@/components/mainText"
import { endpoint } from "@/util/endpoint"

export async function getAllMessages () {
    const data = await fetch(`${endpoint}/home`,{
      cache: 'no-store',  
  })
    if (!data.ok) {
      throw new Error('failed to fetch data')
    }
    return data.json()
  }

export async function postOneMessage(newPost:NewPost) {
  console.log(newPost, 'recieved at apia handler')
  const data = await fetch(`https://make-a-vish.vercel.app/api/home`,{
    method:'POST',
    body: JSON.stringify(newPost)
})
  if(!data.ok) {
    throw new Error('failed to post data')
  }
  return data.json()
}