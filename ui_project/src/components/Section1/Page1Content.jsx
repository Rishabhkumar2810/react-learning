import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = () => {
  return (
    <div className=' w-full flex gap-10 justify-between h-[90vh] py-3 px-18'>
      <LeftContent/>
      <RightContent/>   
    </div>
  )
}

export default Page1Content
