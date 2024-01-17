import React,{useRef, useLayoutEffect, useState} from 'react'
import './Cards.css'
import { ReactDOM } from 'react'

import japan from '../assets/japan.jpg'
import hm from '../assets/hm.jpg'
import cam from '../assets/cam.jpg'
import sea from '../assets/sea.jpg'

const Cards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleCardClick = (index) =>{
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const photosArray = [japan, hm, cam, sea]
  const descriptionArray = ['The beautiful sand', 'The beautiful animals', 'The beautiful cam', 'The beautiful sea']
 
  return (
    <div className="container">
        {[0, 1, 2, 3].map((index) =>(
          <div key={index} className={`panel ${index === expandedIndex ? 'active' : ''}`}
          onClick={() => handleCardClick(index)}
          style={{
            backgroundImage: `url(${photosArray[index]})`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat:`no-repeat`,
          }}
          >
            <h3>{descriptionArray[index]}</h3>
          </div>
        ))}

    </div>
  )
}

export default Cards