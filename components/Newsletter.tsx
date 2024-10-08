import React from 'react'
import ContentContainer from './contents/content-container'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Newsletter = () => {
  return (
    <ContentContainer>
      <div className='flex flex-col items-center justify-center space-y-12'>
        <h4 className='text-lazac font-bold text-sm'>Newsletter</h4>
        <h2 className='text-4xl font-extrabold tracking-wider uppercase text-slate-800'>join us</h2>
        <p className='max-w-lg text-center font-bold text-sm text-muted-foreground'>Subscribe our newsletter for news from our selves. Dont waste time and dont forget any.</p>
      
        <div className='flex items-center justify-center w-full'>
          <Input placeholder='Email address for newsletter' className='w-full rounded-r-none'/>
          <Button className='rounded-l-none' variant="destructive">
            Subscribe
          </Button>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Newsletter