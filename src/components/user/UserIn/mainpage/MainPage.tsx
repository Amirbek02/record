import React from 'react'
import Banner from './Banner'
import MainTestCarousel from './MainTestCarousel'

const MainPage = () => {
  return (
    <div className='flex flex-col gap-1'>
      <Banner/>
      <MainTestCarousel/>
   

    </div>
  )
}

export default MainPage