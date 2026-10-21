import React from 'react'

const TitleCent = ({text,para}) => {
  return (
    <div className=' w-[1296px]'>
      <h2 className='font-extrabold text-[40px] leading-[130%] pb-6  text-center '>{text}</h2>
      <p  className='text-[18px] leading-[160%] pb-10 text-center'>{para}</p>
    </div>
  )
}

export default TitleCent
