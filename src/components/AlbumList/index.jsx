import React, { useState } from 'react';

import { albumsData } from './Data/AlbumData'

const AlbumList = () => {
    const [likedAlbums, setLikedAlbums] = useState({});
  
    const toggleLike = albumName => {
      setLikedAlbums(prevState => ({
        ...prevState,
        [albumName]: !prevState[albumName]
      }));
    };
  
    return (
      <div class="Albums">
        <ol>
          {albumsData.map(album => (
            <li key={album.name}>
              <h3>{album.name}</h3>
              <p>{album.summary}</p>
              <p>Release Date: {album.releaseDate}</p>
              <div class="image_container">
                <img class="image" src={album.coverArt} alt={album.name} />
              </div>
              <div class = "like_container">
              <button class="like_button" onClick={() => toggleLike(album.name)}>
                {likedAlbums[album.name] ? 'Unlike' : 'Like'}
              </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  export default AlbumList;
