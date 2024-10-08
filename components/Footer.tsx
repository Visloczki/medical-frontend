import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='max-w-5xl py-4 mx-auto flex flex-col'>
      <div className='flex w-full mb-12 justify-between font-semibold text-muted-foreground'>
        <div className='flex flex-col space-y-2'>
          <h5 className='text-md font-bold py-4'>Company Info</h5>
          <Link href="#">About Us</Link>
          <Link href="#">Carrier</Link>
          <Link href="#">We are hiring</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h5 className='text-md font-bold py-4'>Legal</h5>
          <Link href="#">About Us</Link>
          <Link href="#">Carrier</Link>
          <Link href="#">We are hiring</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h5 className='text-md font-bold py-4'>Features</h5>
          <Link href="#">Business Marketing</Link>
          <Link href="#">User Analytics</Link>
          <Link href="#">Live Chat</Link>
          <Link href="#">Unlimited Support</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h5 className='text-md font-bold py-4'>Resources</h5>
          <Link href="#">IOS & Android</Link>
          <Link href="#">Watch a demo</Link>
          <Link href="#">Customers</Link>
          <Link href="#">API</Link>
        </div>
        <div className='flex flex-col space-y-2'>
          <h5 className='text-md font-bold py-4'>Get In Touch</h5>
          <Link href="#" className='flex space-x-2 items-center text-sm'><PhoneCall color="crimson"/> <span>(123) 456-7891</span></Link>
          <Link href="#" className='flex space-x-2 items-center text-sm'><MapPin color="crimson"/> <span>4242 HP, Szoa. str.23</span></Link>
          <Link href="#" className='flex space-x-2 items-center text-sm'><Mail color="crimson" /><span>info@damwebstudio.eu</span></Link>
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <p className='font-bold text-sm text-muted-foreground'>{new Date().getFullYear()} Made from figma design. Thanks.</p>
        <div className='flex justify-around space-x-4 text-lazac'>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  )
}

export default Footer