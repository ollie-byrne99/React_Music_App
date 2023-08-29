import React, { useState } from 'react';


const artistData = {
  genre: "The King of Soulful Rock",
  introduction: "Irish singer, songwriter, and multi-instrumentalist Hozier rose to global attention in 2013 when his moody and soulful rock single 'Take Me to Church' became a viral success. The song catapulted him into a major-label contract for his eponymous debut, platinum certifications in 11 countries, and a Grammy nomination for Song of the Year in 2015. After several years of touring and promotion, he returned with the 2018 EP Nina Cried Power and his second full-length, Wasteland, Baby!, which hit number one in the U.S. and Ireland upon its release in 2019. Hozier's first original track of the next decade was the poignant 2022 protest song 'Swan Upon Leda,' which appeared on 2023 LP Unreal Unearth.",
  image: "https://i.scdn.co/image/ab6761610000e5ebad85a585103dfc2f3439119a"
};

const albumsData = [
  {
    name: "Hozier",
    summary: "The 2014 self-titled debut album 'Hozier' by the Irish musician Andrew Hozier-Byrne, popularly known as Hozier, was a groundbreaking release that fused elements of indie rock, soul, and blues. Anchored by the hauntingly poignant single 'Take Me to Church', which delved into themes of love, religion, and human rights, the album showcased Hozier's profound lyrical depth and diverse musical influences. With its compelling melodies and evocative storytelling, 'Hozier' not only introduced the world to a distinctive new voice but also addressed pressing societal issues, making it both a commercial success and a poignant cultural commentary.",
    releaseDate: "2014",
    coverArt: "https://i.scdn.co/image/ab67616d0000b2730359731f8f8240580be3a9ee"
  },
  {
    name: "Wasteland, Baby!",
    summary: "'Wasteland, Baby!' released in 2019, is the sophomore album by the gifted Irish singer-songwriter Hozier. Building on the signature fusion of indie rock, soul, and blues that marked his debut, this album delves deeper into themes of love, doom, and the human condition amidst a world in flux. From the evocative 'Nina Cried Power,' an ode to protest songs and the icons behind them, to the gentle contemplations of 'Almost (Sweet Music),' Hozier continues to showcase his adeptness at weaving intricate narratives with stirring melodies. 'Wasteland, Baby!' not only solidified Hozier's standing as one of contemporary music's most thoughtful voices but also debuted at number one on the US Billboard 200, confirming its commercial and critical acclaim.",
    releaseDate: "2019",
    coverArt: "https://i.scdn.co/image/ab67616d0000b2735795e01c151ba5a8ce4bd295"
  },
  {
    name: "Unreal Unearth",
    summary: "Unreal Unearth sets its sights on something much more difficult, excavating what infernos can feel like when pain is what people want, how close torment can come to an aching love, and what punishment looks like when its victim doesn't deserve it. Hozier doesn’t just succeed in exploring that dark emotional world; his painful ascent makes the listener immediately want to climb with him. Even harder, he successfully delivers a third album that doesn't shy away from any topic, even when he doesn't have the answers. Hozier isn't just growing as an artist, he's being reborn. ",
    releaseDate: "2023",
    coverArt: "https://i.scdn.co/image/ab67616d0000b2734a60a2e02534ecabc839dbe9"
  }
];

const ArtistInfo = () => (
  <div class ="Artist_Info">
    <h2>{artistData.genre}</h2>
    <div class ="Artist_Align">
    <p>{artistData.introduction}</p>
    <img class = "image" src={artistData.image} alt="Hozier_Image" />
    </div>
  </div>
);

const AlbumList = () => (
  <div class = "Albums">
    <h2>Albums</h2>
    <ol>
      {albumsData.map(album => (
        <li key={album.name}>
          <h3>{album.name}</h3>
          <p>{album.summary}</p>
          <p>Release Date: {album.releaseDate}</p>
          <div class = "image_container">
          <img class = "image" src={album.coverArt} alt={album.name} />
          </div>
        </li>
      ))}
    </ol>
  </div>
);


const NavBar = () => (
    <nav>
      <a href="/">Home</a>
      <a href="/tickets">Tickets</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );


export default function App(){
  return (
    <>
    <div>
        <NavBar />
    </div>
    <header>Hozier's Albums Fan Club</header>
    <div>
      <ArtistInfo />
      <AlbumList />
    </div>
    <footer>©Hozier 2023</footer>
    </>
  );
};




