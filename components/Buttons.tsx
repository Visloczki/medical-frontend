import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'

interface BProps {
  href: string;
  className?: string;
  bordered?: boolean;
  children?: React.ReactNode
}

const Buttons = ({href,bordered,className, children}: BProps) =>  {
  return (
    <div>
      <Link href={href} className={cn(`py-4 px-12  ${bordered ? 'bg-transparent text-lazac border border-lazac' : 'bg-lazac text-white'} text-sm font-semibold rounded-lg`, className)}>
        {children}
      </Link>
    </div>
  )
}

export default Buttons