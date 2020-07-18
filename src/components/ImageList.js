import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) =>{
    const image = props.imageList.map((image)=>{
        return  <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{image}</div>
}

export default ImageList;