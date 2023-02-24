import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Porfolio = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* ------------------heading----------- */}
        <span style={{color : darkMode? 'white' :''}} >Recent Projects</span>
        <span>Portfolio</span>
     
        {/* ------------------slider------------- */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Porfolio