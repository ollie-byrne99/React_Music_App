import React from 'react';

import { artistData } from './Data/ArtistData'

const ArtistInfo = () => (
    <div class ="Artist_Info">
      <h2>{artistData.genre}</h2>
      <div class ="Artist_Align">
      <p>{artistData.introduction}</p>
      <img class = "image" src={artistData.image} alt="Hozier_Image" />
      </div>
    </div>
  );


export default ArtistInfo;
