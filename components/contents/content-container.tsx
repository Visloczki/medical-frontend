import React from 'react'

interface ContentContainerProps {
  children: React.ReactNode
}

const ContentContainer = ({children} : ContentContainerProps) => {
  return (
    <div className='py-[80px] mx-auto items-center justify-center flex'>
      {children}
    </div>
  )
}

export default ContentContainer