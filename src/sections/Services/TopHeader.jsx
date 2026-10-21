import React from 'react'
import Container from '../../components/common/Container'
import Navbar from '../../components/common/Navbar'
import ServicesHeader from '../../components/common/ServicesHeader'

const TopHeader = () => {
  return (
    <div className="max-w-[1920px] bg-[#F3F6FF]">
      
        <div>
          <Navbar/>
          <ServicesHeader/>
        </div>
      
    </div>
  )
}

export default TopHeader

