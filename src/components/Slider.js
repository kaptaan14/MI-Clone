import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function Slider({start}) {
  return (
    <Carousel fade>
      {
        start.map((items,index)=>(
            <Carousel.Item>
                <img className='image' src={items} alt='first Slide'/>
            </Carousel.Item>
        ))
      }
      </Carousel>
  )
}

export default Slider