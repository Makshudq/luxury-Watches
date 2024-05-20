import React from 'react'
import "./Card.css";

function Imgcard(props) {
    return (
        <div className='imginner-div'>
            <img className="img-sections" src={props.watches}></img>
        </div>
    )
}

export default Imgcard
