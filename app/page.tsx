"use client"
import Counters from '@/components/Counters'
import HeroPage from '@/components/HeroPage'
import Navigation from '@/components/Navigation'
import OurDepartment from '@/components/OurDepartment'
import OurExperts from '@/components/OurExperts'
import AmorphShape from '@/components/Shapes/Amorph'
import Circle from '@/components/Shapes/Circle'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import LeadingMedicine from '@/components/LeadingMedicine'
import OurTeam from '@/components/OurTeam'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>

      <div className='container mx-auto max-w-7xl'>
        <Navigation />
        <div className='relative '>
          <motion.div

            initial={{
              x: 400,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            className="absolute right-24  w-[550px] h-[600px]  top-5 ">
            <Image alt='MissDoctor' src="/assets/doctor.png" width={800} height={1200} className='h-full object-contain' />
          </motion.div>
          <div className='absolute right-[550px] top-[150px]'>
            <Circle />
          </div>
          <div className="absolute right-8 top-[115px] -z-10">
            <AmorphShape />
          </div>
          <div className="absolute right-24 top-[170px] -z-20">
            <Image className='w-[567px] h-[375px]' width={800} height={900} src="/assets/rectangleColored.png" alt='' />
          </div>
          <div className="absolute -z-20 right-6 backdrop:blur-xl rounded-[50px] -top-5 border-sky-200 w-[520px] h-[623px] bg-sky-200/50 backdrop-blur-md"></div>
        </div>
        <HeroPage />
        <Counters />
        <OurExperts />
      </div>
      <div className='min-h-dvh bg-sky-50 flex items-center w-full  justify-center'>
        <OurDepartment />
      </div>
      <div className='container mx-auto max-w-5xl'>
        <LeadingMedicine />
        <OurTeam />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default Page