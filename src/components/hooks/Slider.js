import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import '../../App.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


const images = [
  image1,
  image2,
  image3
]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

const Slider = () => {
  
const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }


  return (
    <div className="container">
        <div className="slideshow">
        {/* <img alt='' className="slides"/> */}
         <AnimatePresence initial={false} custom={direction}>
          <motion.img  
            drag
            dragConstraints={{left:0, right:0, top:0, bottom:50}}

            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt=''
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className='prevButton' onClick={prevStep}>
          ◀
        </button>
        <button className='nextButton' onClick={nextStep}>
          ▶
        </button>
        

        </div>
        
    </div>
    
  )
}

export default Slider