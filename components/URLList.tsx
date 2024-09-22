'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { CopyIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'

import NumberTicker from './magicui/number-ticker'
import { toast } from 'react-toastify'
import Tooltip from '@mui/material/Tooltip';




type Url = {
        id: string,
        shortCode: string,
        originUrl: string,
        visits: number
    }


const URLList = () => {

    const [urls,setUrls] = useState<Url[]>([])
    const shortenerUrl = (code:string)=> {
        return `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`
    }

    


    

    const fetchUrls = async () => {
        
        try{
            const response = await fetch('/api/urls')
            const data = await response.json()
            setUrls(data);

        }catch(error){
            console.log("error fetching urls",error)
            toast.error("Error fetching URLS");
        }
    }

    useEffect(()=>{
            fetchUrls();
    },[])



    const handleCopyUrl = (code:string)=>{
        navigator.clipboard.writeText(shortenerUrl(code)).then(()=>toast.success("Copied\n" + shortenerUrl(code)))
    } 
    
  return (

    
        <div>
        <h2 className='text-2xl font-bold mb-2'>Recent URLS</h2>
        
        <ul className='space-y-2 '>
        {urls.map((url) => {
            return (
                <li key={url.id} className='flex items-center gap-2 justify-between border rounded-md p-2'>
                    <Link href={`/${url.shortCode}`} className='text-lg font-medium text-blue-500' target='_blank'>{shortenerUrl(url.shortCode)}</Link>
                    <div className='flex items-center gap-2 bor'>
                        <Tooltip title="Copy">
                        <Button onClick={()=>handleCopyUrl(url.shortCode)} variant='ghost' size='icon' className='text-muted-foreground'>
                            <CopyIcon className='w-4 h-4' />
                            <span className='sr-only'>Copy</span>
                        </Button>
                        </Tooltip>
                        <span className='flex items-center gap-1'>
                            <Tooltip title="Views">
                            <EyeIcon className='w-4 h-4' />
                            </Tooltip>
                            {url.visits === 0 ? `${url.visits}` : <NumberTicker value={url.visits}/>} views
                           
                        </span>
                    </div>
                </li>
            );
        })}
    
        </ul>
        
    </div>
    
  )
}

export default URLList