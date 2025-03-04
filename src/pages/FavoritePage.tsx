import React from 'react'
import { useStore } from '../store/store';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function FavoritePage() {
    const {favorites, removeFavorite} = useStore();
  return (
    <>
    <h2>Favorites</h2>
    {favorites.map((photo) => (
        <li key={photo.id}>
            <img src={photo.thumbnailUrl}/>
            <p>{photo.title}</p>
            <p>By user:<Link to={`/users/${photo.userId}`}> {photo.userId}</Link></p>
            <Button variant="success" onClick={() => removeFavorite(photo.id)} >Remove</Button>
        </li>
    ))}

    </>
  )
}

export default FavoritePage