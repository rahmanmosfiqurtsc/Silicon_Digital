import React from 'react'
import Container from '../../components/common/Container'
import BlogSection from '../../components/other/BlogSection'
import ContactBanner from '../../components/other/ContactBanner'

const BlogCont = () => {
  return (
    <div className='bg-[#6365f131]'>
      <Container>
        <div className='w-[1296px]'>
          <BlogSection/>
        </div>
      </Container>
      <div>
        <ContactBanner/>
      </div>
    </div>
  )
}

export default BlogCont
