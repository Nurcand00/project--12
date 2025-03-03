import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'


interface postParams {
    userId:number;
    id:number;
    title: string;
    body: string;
}
interface commentParams {
    postId:number;
    id:number;
    name: string;
    email: string;
    body: string;
}


export const postLoader = async( {params}: LoaderFunctionArgs) => {
    const postResponse = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const posts = await postResponse.json();
    
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);
    const comments = await commentsResponse.json();

    return {posts, comments};
}


function PostDetailPage() {
    const {posts, comments} = useLoaderData() as {posts:postParams, comments: commentParams[]};
  return (
    <>
    <h3>{posts.title}</h3>
    <p>{posts.body}</p>
    <h2>Comments</h2>
    <ul>
        {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
        ))}
    </ul>

    </>
  );
}

export default PostDetailPage