'use client'
import React, { useState } from 'react'
import ShortenForm from './ShortenForm'
import URLList from './URLList'


const URLShortenerContainer=()=>{
    const [refreshKey, setRefreshKey] = useState<number>(0)
    const handleUrlShortened = () =>{
            setRefreshKey(prev=>(prev+1))
    }
    
    return(
        <div>
            <ShortenForm handleUrlShortened={handleUrlShortened}/>
            <URLList key={refreshKey}/>
        </div>
    )
}

export default URLShortenerContainer
