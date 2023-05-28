import React from 'react'
import VideoCard from './VideoCard'
import '../styles/Videos.css'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item,index)=>(
                <VideoCard key={item.image} name={item.name} index={item.index} image={item.image} />
            ))
        }
    </div>
  )
}

export default Videos