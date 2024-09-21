import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { CopyIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import SparklesText from './magicui/sparkles-text'
import NumberTicker from './magicui/number-ticker'


const URLList = () => {
  return (
    <div>
        {/* <h2 className='text-2xl font-bold mb-2'>Recent URLS</h2> */}
        <h2><SparklesText className='text-2xl font-normal mb-2' text='Recent URLS'/></h2>
        <ul className='space-y-2'>
        
            <li className='flex items-center gap-2 justify-between border rounded-md p-2'>
                <Link href='https://www.ravikant.dev' className='text-lg font-medium text-blue-500' target='_blank'>https://www.ravikant.dev</Link>
                <div className='flex items-center gap-2 bor'>
                    <Button variant='ghost' size='icon' className='text-muted-foreground'>
                        <CopyIcon className='w-4 h-4' />
                        <span className='sr-only'>Copy</span>
                    </Button>
                    <span className='flex items-center gap-1'>
                        <EyeIcon className='w-4 h-4' />
                        <NumberTicker value={100}/>
                    </span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default URLList