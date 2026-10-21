import Awardsec from '../sections/homepage/Awardsec'

import FeatureSec from '../sections/homepage/FeatureSec'
import HeaderSec from '../sections/homepage/HeaderSec'
import CompoSec from '../sections/homepage/CompoSec'
import Trusted from '../sections/homepage/Trusted'
import Testimon from '../sections/homepage/Testimon'
import Atmosphere from '../sections/homepage/Atmosphere'
import BlogCont from '../sections/homepage/BlogCont'
import Footer from '../components/common/Footer'


const Homepage = () => (
  <div>
    <HeaderSec/>
    <Awardsec/>
    <FeatureSec/>
    <CompoSec/>
    <Trusted/>
    <Testimon/>
    <Atmosphere/>
    <BlogCont/>
    <Footer/>
  </div>
)

export default Homepage
