import React from 'react'
import ImageCardList from './ImageCardList'
import images from '../Data/images'

const TenMemorableMoments = () => {
  return (
    <div>
      <ImageCardList items={images}/>
    </div>
  )
}

export default TenMemorableMoments