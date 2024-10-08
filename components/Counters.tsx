import React from 'react'
import NumberTicker from './ui/number-ticker'

const Counters = () => {
  return (
    <div className='h-[264px] flex w-full max-w-5xl items-center justify-between mx-auto '>
      <div className='flex flex-col space-y-4 items-center'>
        <h2 className='text-6xl text-red-500 font-extrabold'><NumberTicker value={15} className='text-6xl text-red-500 font-extrabold'/>K</h2>
        <p className='font-bold text-muted-foreground'>Happy Customers</p>
      </div>
      <div className='flex flex-col space-y-4 items-center'>
        <h2 className='text-6xl text-red-500 font-extrabold'><NumberTicker value={150} delay={1} className='text-6xl text-red-500 font-extrabold'/>K</h2>
        <p className='font-bold text-muted-foreground'>Monthly Visitors</p>
      </div>
      <div className='flex flex-col  space-y-4 items-center'>
        <h2 className='text-6xl text-red-500 font-extrabold'><NumberTicker value={15} delay={2} className='text-6xl text-red-500 font-extrabold'/></h2>
        <p className='font-bold text-muted-foreground'>Countries Worldwide</p>
      </div>
      <div className='flex flex-col space-y-4 items-center'>
        <h2 className='text-6xl text-red-500 font-extrabold'><NumberTicker value={100} delay={3} className='text-6xl text-red-500 font-extrabold'/>+</h2>
        <p className='font-bold text-muted-foreground'>Top Partners</p>
      </div>
    </div>
  )
}

export default Counters