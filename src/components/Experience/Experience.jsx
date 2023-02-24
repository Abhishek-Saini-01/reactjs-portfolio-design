import React from 'react'
import './Experience.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle" >8+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">20+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience