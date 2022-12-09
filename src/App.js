import {useState, useEffect, useRef} from 'react'
import './App.css';
import { motion } from 'framer-motion'

import image1 from '../src/img/1.jpeg'
import image2 from '../src/img/2.jpeg'
import image3 from '../src/img/3.jpeg'
import image4 from '../src/img/4.jpeg'
import image5 from '../src/img/5.jpeg'
import image6 from '../src/img/6.jpeg'
import image7 from '../src/img/7.jpeg'
import image8 from '../src/img/8.jpeg'

const img = [image1, image2, image3,image4,image5,image6,image7,image8]

function App(){
  const carousel = useRef();
  const [width,setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrolWidh, carousel.current?.offsetWidt)
    setWidth(carousel.corrent?.scrolWidh - carousel.current?.offsetWidt)  
  },[])

  return (
    <div className='App'>

      <motion.div ref={carousel} className='carousel'whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner'
        drag="x"
        dragConstraints={{right: 0,left: -width}}
        inicial={{x: 100}}
        animate={{x:0}}
        transition={{duration:0.8}}
        >

        {img.map(image => (
          <motion.div className="item" key={image}>
            <img src={image} alt="Texto alt"/>
          </motion.div>  
        ))}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;