import { ClipboardPlus, HeartPulseIcon, StethoscopeIcon } from 'lucide-react'
import Buttons from './Buttons'

const HeroPage = () => {
  return (
    <div className='pt-[80px] flex flex-col max-w-6xl mx-auto'>
      <div className='py-8 grid grid-cols-1 md:grid-cols-2 gap-x-3 h-[400px]'>

        {/* ROW 1 */}
        <div className='w-full h-full flex flex-col justify-between items-start'>
          <div className='text-sm font-bold text-lazac'>Join Us</div>
          <div className='w-2/3 tracking-wide '>
            <h2 className='text-5xl font-extrabold text-slate-800 leading-[4rem]'>A Great Place to Receive Care</h2>
          </div>
          <div className='w-2/3'>
            <h2 className='text-md font-light text-slate-800 leading-loose'>Medical Recover is most focused in helping you discover your most beautiful smile </h2>
          </div>
          <div className='w-full tracking-widest flex space-x-2 mt-2'>
            <Buttons href='/get-quote-now'>Get Quote Now</Buttons>
            <Buttons href='/get-quote-now' bordered>Learn More</Buttons>
          </div>
        </div>
        <div className='w-4/12 relative'>

        </div>
      </div>

      {/* ROW 2 Services */}
      <div className="mt-14 pb-[80px] z-10 grid grid-cols-1 md:grid-cols-3 gap-x-8">

        <div className='shadow-xl shadow-sky-100 border-b-white w-full h-[300px] px-12 bg-white flex flex-col items-start justify-evenly'>
          <div className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-red-500'>
            <HeartPulseIcon width={40} height={40} fill='white' stroke='#ef4444' absoluteStrokeWidth strokeWidth={1} />
          </div>
          <div className='w-full'>
            <h3 className='font-bold text-sm'>
              Online Appoinment
            </h3>
            <div className='mt-4 w-[50px] bg-lazac h-[0.12rem]'></div>
            <div className='text-sm font-bold line-clamp-3 mt-4 text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus suscipit minus at, quaerat consequuntur reiciendis officia, vero doloribus recusandae itaque deserunt voluptatibus? Eveniet temporibus accusamus delectus culpa molestias animi.
            </div>
          </div>
        </div>

        <div className='shadow-xl shadow-sky-100 border-b-white w-full h-[300px] px-12 bg-white flex flex-col items-start justify-evenly'>
          <div className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-red-500'>
            <StethoscopeIcon width={40} height={40} stroke='white' absoluteStrokeWidth strokeWidth={1.5} />
          </div>
          <div className='w-full'>
            <h3 className='font-bold text-sm'>
              Emergency Case
            </h3>
            <div className='mt-4 w-[50px] bg-lazac h-[0.12rem]'></div>
            <div className='text-sm font-bold line-clamp-3 mt-4 text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus suscipit minus at, quaerat consequuntur reiciendis officia, vero doloribus recusandae itaque deserunt voluptatibus? Eveniet temporibus accusamus delectus culpa molestias animi.
            </div>
          </div>
        </div>
        <div className='shadow-xl shadow-sky-100 border-b-white w-full h-[300px] px-12 bg-white flex flex-col items-start justify-evenly'>
          <div className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-red-500'>
            <ClipboardPlus width={40} height={40} stroke='white' absoluteStrokeWidth strokeWidth={1.5} />
          </div>
          <div className='w-full'>
            <h3 className='font-bold text-sm'>
              Cancer Care
            </h3>
            <div className='mt-4 w-[50px] bg-lazac h-[0.12rem]'></div>
            <div className='text-sm font-bold line-clamp-3 mt-4 text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus suscipit minus at, quaerat consequuntur reiciendis officia, vero doloribus recusandae itaque deserunt voluptatibus? Eveniet temporibus accusamus delectus culpa molestias animi.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroPage