import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'



const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  className="works">

      {/* -----------left--------------------------- */}
        <div className="awersome">
            <span style={{color : darkMode? 'white' :''}}>Works for All These</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. T ducimus cum, deleniti <br /> asperiores expedita beatae fugiat. <br /> Dolorum, animi. Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

      {/* --------------------right------------------------ */}
      <div className="w-right">
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate:0}}
        transition={{duration:3.5,type:'spring'}}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork}  />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr}  />
          </div>
          <div className="w-secCircle">
            <img src={Amazon}  />
          </div>
          <div className="w-secCircle">
            <img src={Shopify}  />
          </div>
          <div className="w-secCircle">
            <img src={Facebook}  />
          </div>
        </motion.div>
        {/* ---------------------bg-cicle------------------ */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>

    </div>
  )
}

export default Works    