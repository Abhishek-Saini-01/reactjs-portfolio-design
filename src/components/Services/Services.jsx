import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png' 
import Glasses from '../../img/glasses.png' 
import Humble from '../../img/humble.png' 
import Card from '../Card/Card'
import Resume from './resume.txt'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
    const transition = {duration:1,type:"spring"}
   
const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        <div className="awersome">
            <span style={{color : darkMode? 'white' :''}} >My Awersome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. T ducimus cum, deleniti <br /> asperiores expedita beatae fugiat. Dolorum, animi.</span>
            <a href={Resume} download><button className='button s-button'>Download CV</button></a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="cards">
            <motion.div
            initial={{left: '25%'}}
            whileInView= {{left:'14rem'}}
            transition={transition}
            style={{left:"14rem" }}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>
            <div style={{left:"-4rem" ,top:"12rem" }}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, CSS, Javascript, React, Angular, Vue, Next, Bootstrap'}
                />
            </div>
            <motion.div 
            initial={{left: '74%',top:'19rem'}}
            whileInView= {{left:'20rem'}}
            transition={transition}
            
            style={{left:"20rem" ,top:"19rem" }}>
                <Card
                emoji={Humble}
                heading={'UX/UI'}
                detail={'Lorem ipsum dolor sit amet consectetur'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services