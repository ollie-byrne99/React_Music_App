import React from 'react'
import { AlbumList, ArtistInfo, FetchRequest } from '../../components'

const Home = () => {
    return (
        <>
        <h1>Welcome to the Hozier Fan Club!</h1>
        <div>
        <ArtistInfo />
        <AlbumList />
        <FetchRequest />
      </div>
      <footer>©Hozier Fan Club 2023</footer>
      </>
    )
  }
  
  export default Home;
