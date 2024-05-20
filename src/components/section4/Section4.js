import React from 'react'
import Imgcard from '../cards/Imgcard'
import img34 from '../../assets/Rectangle 34.png'
import img35 from '../../assets/Rectangle 35.png'
import img36 from '../../assets/Rectangle 36.png'
import './Sections4.css'



function Section4() {
    let imgArr = [img34, img35, img36]
    return (
        <div className='cardsGrp'>
            {imgArr.map((img) => {
                return <Imgcard watches={img} />
            })}
        </div>
    )
}

export default Section4
