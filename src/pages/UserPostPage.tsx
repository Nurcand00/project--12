import React from 'react'
import { Link, LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';

interface UserPostParams{
    userId: number;
    id: number;
    title: string;
   
}
 export const userPostLoader = async ({params }: LoaderFunctionArgs) => { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
    const posts = await response.json();
    return posts;
  }

function UserPostPage() {
    const posts = useLoaderData() as UserPostParams[];
    const {userId} = useParams(); 
    
  return (
    <>    
    <h3>Posts</h3>
    {posts.map((post) => (
        <li key={post.id}>                      
            <Link to={`/users/${userId}/posts/${post.id}`}>{post.title}</Link> 
        </li>
    ))}
  
  
    </>
  )
}

export default UserPostPage