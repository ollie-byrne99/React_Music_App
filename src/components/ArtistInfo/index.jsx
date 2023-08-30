import React from 'react';

const artistData = {
  genre: "The King of Soulful Rock",
  introduction: "Irish singer, songwriter, and multi-instrumentalist Hozier rose to global attention in 2013 when his moody and soulful rock single 'Take Me to Church' became a viral success. The song catapulted him into a major-label contract for his eponymous debut, platinum certifications in 11 countries, and a Grammy nomination for Song of the Year in 2015. After several years of touring and promotion, he returned with the 2018 EP Nina Cried Power and his second full-length, Wasteland, Baby!, which hit number one in the U.S. and Ireland upon its release in 2019. Hozier's first original track of the next decade was the poignant 2022 protest song 'Swan Upon Leda,' which appeared on 2023 LP Unreal Unearth. The Dante's Inferno inspired 'Unreal Unearth' album debuted on the 18th of August 2023, to critical acclaim.",
  image: "https://i.scdn.co/image/ab6761610000e5ebad85a585103dfc2f3439119a"
};

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
