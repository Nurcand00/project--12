import React from 'react'
import { Button } from 'react-bootstrap';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { useStore } from '../store/store';

 export interface AlbumDetailParams{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    userId: number;
}

 export const albumDetailsLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch (`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);
  const albums = await response.json();
  return albums;

}

function AlbumDetailPage() {
  const albums = useLoaderData() as AlbumDetailParams[];
  const {userId} = useParams();
  const {favorites, addFavorite, removeFavorite} = useStore();

const handleFavoriteClick = (photo:AlbumDetailParams) => {
  if (favorites.some((fav) => fav.id === photo.id))
     {removeFavorite(photo.id);

     }else {
    addFavorite({...photo, userId: Number(userId)});
     }
};


  return (
    <>
    <h2>Photos</h2>
    <ul>
      {albums.map((album)=> (
        <li key={album.id}>
          <img src={album.thumbnailUrl}/>
          <p>{album.title}</p>
          <Button onClick={() => handleFavoriteClick(album)} variant='secondary'>
          {favorites.some((fav) => fav.id === album.id) ? "Unfavorite" : "Favorite"}
            </Button>
        </li>

      ))}
    </ul>

    </>
  );
}

export default AlbumDetailPage