import React from 'react'
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';


interface UserAlbumParams{
 
        userId: number;
        id: number;
        title: string;
}

 export const userAlbumLoader = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
    const albums = await response.json()
    return albums;
 }

function UserAlbumsPage() {
    const albums = useLoaderData() as UserAlbumParams[];
  return (
    <>
    <h2>Albums</h2>
    <ul>
        {albums.map((album) =>(
            <li key={album.id}>
            <Link to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link>
            </li>
             
        ))}
    </ul>
    </>
  )
}

export default UserAlbumsPage