import React from 'react'
import Card from './Card'
import './Cards.css'

function Cards() {
    return (
        <div className='cards-group'>
            <Card title={"01"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"} />
            <Card title={"02"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"} />
            <Card title={"03"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"} />
        </div>
    )
}

export default Cards
