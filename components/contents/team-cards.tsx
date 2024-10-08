"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TeamCardsProps {
  drName: string;
  subTitle: string;
  imageUrl: string;
}

const TeamCards = ({ drName, subTitle, imageUrl }: TeamCardsProps) => {
  return (

    <motion.div
      initial={{
        scale: 1
      }}
      whileHover={{
        scale: 1.2
      }}
      className='w-full min-h-[400px] border rounded-3xl shadow-sky-500/10 shadow-lg'>
      <Image width={1200} height={800} alt='dok' src={`/assets/${imageUrl}.png`} className='rounded-t-3xl' />
      <div className='flex flex-col space-y-4 items-center my-6 justify-center text-center'>
        <h3 className='text-muted-foreground font-extrabold tracking-wide'>{drName}</h3>
        <small className='text-muted-foreground'>{subTitle}</small>
        <div className='w-full flex justify-center space-x-4'>
          <Facebook color="crimson" />
          <Instagram color="crimson" />
          <Twitter color="crimson" />
        </div>
      </div>
    </motion.div>
  )
}

export default TeamCards