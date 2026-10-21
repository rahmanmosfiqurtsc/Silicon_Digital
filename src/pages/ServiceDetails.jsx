import React from 'react'
import Heros from '../sections/ServDetails/Heros'
import Navbar from '../components/common/Navbar'
import ServDashSec from '../sections/ServDetails/ServDashSec'
import HowWork from '../sections/ServDetails/HowWork'
import TrustedSec from '../sections/ServDetails/TrustedSec'
import PersonalisSec from '../sections/ServDetails/PersonalisSec'
import ProdDevSec from '../sections/ServDetails/ProdDevSec'
import CallAction from '../sections/ServDetails/CallAction'
import Footer from '../components/common/Footer'

const ServiceDetails = () => {
  return (
    <div>
      <Navbar/>
      <Heros/>
      <ServDashSec/>
      <HowWork/>
      <TrustedSec/>
      <PersonalisSec/>
      <ProdDevSec/>
      <CallAction/>
      <Footer/>
    </div>
  )
}

export default ServiceDetails
