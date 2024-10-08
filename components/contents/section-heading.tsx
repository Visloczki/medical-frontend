import React from 'react'
import Separator from './separator';

interface SectionHeadingProps {
  heading: string;
  title: string;
  description: string;
}

const SectionHeading = ({description, heading, title} : SectionHeadingProps) => {
  return (
    <>
      <div>
        <h4 className='text-red-500 font-bold text-sm'>{heading}</h4>
      </div>
      <div className='max-w-lg pb-8'>
        <h2 className='font-extrabold text-slate-800 text-4xl '>{title}</h2>
        <Separator/>
        <h4 className='text-muted-foreground text-wrap  text-sm font-medium'>{description}</h4>
      </div>
    </>
  )
}

export default SectionHeading