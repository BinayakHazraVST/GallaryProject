import React from 'react'

const ImageCard = (props) => {
    return (
        <a href={props.elem.url} target='_blank'>
            <div className="gallaryElement">
                <div className="imageBox">
                    <img src={props.elem.download_url} alt="Image" loading="lazy"/>
                </div>

                <div className="authorDetails">{props.elem.author}</div>
            </div>
        </a>
    )
}

export default ImageCard
