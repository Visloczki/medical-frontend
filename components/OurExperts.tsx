import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContentContainer from './contents/content-container'

const OurExperts = () => {
  return (
    <ContentContainer>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col py-8 space-y-8 justify-center'>
          <div className='w-[85px] h-[7px] bg-lazac'>
          </div>
          <div>
            <h2 className='text-4xl font-extrabold tracking-wide text-slate-700'>Meet Our Experts</h2>
          </div>
          <div className='max-w-[450px] line-clamp-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi aliquam voluptates dignissimos repellat porro enim molestiae cupiditate mollitia quasi minus ipsam, illo aut rerum dolor aperiam facere magni quod beatae temporibus quo voluptatum, nobis odio. Molestias error asperiores sunt!</p>
          </div>
          <div>
            <Link href="/articles/1" className='text-lazac text-sm font-semibold flex space-x-2 items-center'>
              Read More
              <ChevronRight color='#ff685b' />
            </Link>
          </div>
        </div>



        <div>
          <Image width={850} height={850} lazyBoundary='Loading' alt='dna' src="/assets/dna.png" className='w-[500px] h-[500px] object-contain' />
        </div>

      </div>
    </ContentContainer>
  )
}

export default OurExperts