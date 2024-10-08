import { MoveRight } from 'lucide-react'
import Link from 'next/link'



const Navigation = () => {
  return (
    <div className='p-5 flex justify-between h-full'>
      <div className='mr-8 flex items-center'>
        <h3 className="font-extrabold text-[#252B42] text-2xl">MedicalCover</h3>
      </div>
      <div className='flex container justify-between mx-24  h-full'>
        <nav className='flex items-center justify-start space-x-6 geistMono font-extrabold text-sm text-antracit'>
          <Link href="#">Home</Link>
          <Link href="#">Product</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </nav>
        <div className='flex items-center space-x-10'>

          <Link href="/login" className='text-cor-600/80 font-bold text-sm text-lazac'>
            Login
          </Link>
          <Link href="/login" className=' flex items-center space-x-4 justify-center text-white bg-lazac rounded-lg py-3 px-6 font-bold text-sm uppercase'>
            <span className='text-white font-medium tracking-widest'>
              Join Us
            </span>
            <MoveRight className='opacity-80'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation