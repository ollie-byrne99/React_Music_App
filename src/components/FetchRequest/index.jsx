import React, { useState, useEffect } from 'react'

const FetchRequest = () => {
    const [lyric, setLyric] = useState(null)  
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    async function getLyrics() {
        try {
            const url = "https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=29812"
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            const data = await response.json()
            setLyric(data)
            setLoading(false)

        } catch (err) {
            setError(err.message || "An error occurred.")
            setLoading(false)
            console.error(err)
        }
    }

    useEffect(() => {
        getLyrics() 
        
        const interval = setInterval(() => {
            getLyrics() 
        }, 15000);  
    
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div class= "lyric_box">
            <h3>{lyric.song}</h3>
            <p>"{lyric.lyrics_excerpt}"</p>
        </div>
    )
}

export default FetchRequest



