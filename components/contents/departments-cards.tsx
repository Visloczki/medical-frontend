"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight, Download, Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils';

import { motion } from "framer-motion"
import Link from 'next/link'

interface CardsProps {
  badge?: string;
  onClick?: () => void;
  image: string;
  title: string;
  description?: string;
  sales?: number;
  fromPrice?: number;
  price?: number;
  readMoreLink?: string;
}

const Cards = ({ badge, onClick, image, description, fromPrice, price, readMoreLink, sales, title }: CardsProps) => {
  return (
    <motion.div
      initial={{
        scale: 1,
        zIndex: 1
      }}
      whileHover={{
        scale: 1.2,
        zIndex: 2
      }}
      className='flex flex-col w-full max-w-[328px] justify-center items-center bg-white drop-shadow-lg rounded-lg'>

      <div className={cn(`bg-[url('/assets/${image}.png')] relative w-full h-[300px] bg-no-repeat bg-cover rounded-t-lg`)}>
        <div className='absolute top-4 left-4'>
          {badge ? (
            <Badge >
              {badge}
            </Badge>
          ) : (
            <div className='bg-red-500 text-white px-4 font-semibold rounded-md'>sale</div>
          )}
        </div>
        <div className='absolute w-full  bottom-5 mx-auto flex justify-center space-x-4'>
          <Button className='rounded-full w-[40px] h-[40px] relative' variant="outline" onClick={onClick}>
            <Heart width={25} height={25} stroke='#888' strokeWidth={1.5} className='absolute' />
          </Button>
          <Button className='rounded-full w-[40px] h-[40px] relative' variant="outline" onClick={onClick}>
            <ShoppingCart width={25} height={25} stroke='#888' strokeWidth={1.5} className='absolute' />
          </Button>
          <Button className='rounded-full w-[40px] h-[40px] relative' variant="outline" onClick={onClick}>
            <Eye width={25} height={25} stroke='#888' strokeWidth={1.5} className='absolute' />
          </Button>
        </div>
      </div>
      <div className='min-h-[300px] p-4 w-full flex flex-col space-y-6'>
        <div className='flex items-center justify-between w-full '>
          <h5 className='text-lazac font-bold text-sm'>Painless procedures</h5>
          <Badge className='rounded-full py-1 flex items-center justify-center space-x-2 font-light'>
            <Star color='yellow' fill='yellow' size={15} />
            4.5
          </Badge>
        </div>
        <div>
          <h4 className='text-md font-bold text-slate-800'>{title}</h4>
        </div>
        <div className='text-sm text-muted-foreground font-bold'>
          {description}
        </div>
        <div className='flex space-x-3'>
          <Download size={20} color="#555" />
          <p className='font-bold text-muted-foreground'>{sales} Sales</p>
        </div>
        <div className='flex space-x-3'>
          <p className='font-light text-gray-400 line-through'>${fromPrice}</p>
          <p className='font-bold text-emerald-500 text-md'>${price}</p>
        </div>
        <div className='pb-4'>
          <Link href={readMoreLink || "#"}>
            <Button variant="ghost">
              Learn More
              <ChevronRight />
            </Button>

          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Cards