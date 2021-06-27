import React from 'react'
import './ImageList.css';
import ImageCards from './ImageCard';

const ImageList = (props) => {
    // console.log(props.image);
    const Image = props.image.map(img => {
        return (
            <ImageCards key={img.id} image={img} />
        );
    });
    return (
        <div className="image-list">
            {Image}
        </div>
    );

}

export default ImageList;
