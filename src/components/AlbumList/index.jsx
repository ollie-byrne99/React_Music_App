import React, { useState } from 'react';

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
