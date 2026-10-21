import React from 'react'

const Award = ({imgg, text, para}) => {
  return (
    <div className='w-84 h-42.5 items-center mx-auto'>
      <img src={imgg} alt='achiev' className='mx-auto'></img>
      <h4 className='font-extrabold text-[24px] leading-[140%]  pt-6 pb-3 text-center'>{text}</h4>
      <p className='text-center leading-[160%]'>{para}</p>
      
    </div>
  )
}

export default Award
