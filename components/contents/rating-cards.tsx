import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface RatingCardsProps {
  stars: number;
  comment: string;
  avatarImg: string;
  avatarName: string;
  avatarJob: string
}

const RatingCards = ({
  avatarImg,
  avatarJob,
  avatarName,
  comment,
  stars
} : RatingCardsProps) => {
  return (
    <div className='w-full  flex flex-col space-y-4 items-center'>
      <div className='flex space-x-2 items-center justify-center'>
        {renderingStars(stars)}
      </div>
      <div className='max-w-[200px] text-center font-bold text-muted-foreground text-sm'>
        {comment}
      </div>
      <div className="flex space-x-4 py-8">
        <Image src={`/assets/${avatarImg}`} width={60} height={60} alt='avatar' className='rounded-full border object-contain'/>
        <div className='flex flex-col items-start justify-center'>
          <h4 className='text-lazac font-bold text-sm'>{avatarName}</h4>
          <p className='text-slate-700/50 font-bold text-sm'>{avatarJob}</p>
        </div>
      </div>
    </div>
  )
}

const renderingStars = (numberOfFilled: number) => {
  const starCount = 5
  const stars = []
  for(let i = 0; i < starCount; i++) {
    stars.push(<Star  stroke='#F3CD03'/>)
    if(numberOfFilled > i) {
      stars[i] = <Star stroke='#F3CD03' fill='#F3CD03' />
    }
  }
  return stars
}

export default RatingCards