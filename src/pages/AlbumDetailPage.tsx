import React from 'react'
import { Button } from 'react-bootstrap';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

interface AlbumDetailParams{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

 export const albumDetailsLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch (`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);
  const albums = await response.json();
  return albums;

}

function AlbumDetailPage() {
  const albums = useLoaderData() as AlbumDetailParams[];
  return (
    <>
    <h2>Photos</h2>
    <ul>
      {albums.map((album)=> (
        <li key={album.id}>
          <img src={album.thumbnailUrl}/>
          <p>{album.title}</p>
          <Button variant='secondary'>Favorites</Button>
        </li>

      ))}
    </ul>



    </>
  )
}

export default AlbumDetailPage