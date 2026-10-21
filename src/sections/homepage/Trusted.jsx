import React from 'react'
import Imgg from '../../assets/Trusted/logo.png'
import Imgg1 from '../../assets/Trusted/logo-1.png'
import Imgg2 from '../../assets/Trusted/logo-2.png'
import Imgg3 from '../../assets/Trusted/logo-3.png'
import Imgg4 from '../../assets/Trusted/logo-4.png'
import Container from '../../components/common/container'

const Trusted = () => {
  return (
    <div className='pt-24 pb-28'>
      <Container>

      <div className='pb-10'>
        <h2 className='font-extrabold text-[32px] leading-[130%] text-[#0B0F19]'>Trusted by Awesome Clients</h2>
      </div>
      <div className='flex gap-6'>
        <img src={Imgg} alt=''/>
        <img src={Imgg1} alt=''/>
        <img src={Imgg2} alt=''/>
        <img src={Imgg1} alt=''/>
        <img src={Imgg3} alt=''/>
        <img src={Imgg4} alt=''/>
      </div>
      </Container>
    </div>
  )
}

export default Trusted
