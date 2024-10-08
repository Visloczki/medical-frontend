import React from 'react'
import RatingCards from './contents/rating-cards'

const LeadingMedicine = () => {
  return (
    <div className='min-h-[70vh] flex flex-col flex-1 py-[80px] space-y-8'>
      <div>
        <h4 className='text-lazac font-bold text-sm'>Practice Advice</h4>
      </div>
      <div className='w-[350px]'>
        <h2 className='text-4xl font-bold'>Leading Medicine</h2>
        <div className='w-[65%] h-[0.35rem] bg-lazac mt-4'>
        </div>
      </div>
      <div className='w-[450px]'>
        <div className="text-sm font-bold text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae impedit aliquam laborum dolor voluptas. Incidunt, repudiandae. Impedit itaque hic quisquam.</div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 py-24 gap-x-24 mx-auto'>
        <RatingCards
          stars={4}
          comment="Slate helps you see how many more days you need to work to reach your financial goal for the mont and year"
          avatarImg='av1.png'
          avatarJob='av1.png'
          avatarName='John M D'
        />
        <RatingCards
          stars={4}
          comment="Slate helps you see how many more days you need to work to reach your financial goal for the mont and year"
          avatarImg='av2.png'
          avatarJob=''
          avatarName='John M D'
        />
        <RatingCards
          stars={5}
          comment="Slate helps you see how many more days you need to work to reach your financial goal for the mont and year"
          avatarImg='av3.png'
          avatarJob=''
          avatarName='John M D'
        />
      </div>
    </div>
  )
}

export default LeadingMedicine