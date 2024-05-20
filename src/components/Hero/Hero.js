import React from 'react'
import { useRef } from "react";
import bannerImg from '../../assets/watchBannerImg.jpg'
import Banner from "../banner/Banner";
import './Hero.css'

function Hero() {

    const ref = useRef("bannerClass")

    return (

        <div className="top-banner">
            {/* <img src={bannerImg}></img> */}
            <Banner
                title={"Timeless Luxury Watches"}
                desc={` Discover our curated collection of premium timepieces, blending
          classic elegance with modern craftsmanship. Elevate your style with
          watches that embody precision, sophistication, and enduring quality.`}
                btn={`Explore More`}
                class={ref.current}
            />


        </div>
    )
}

export default Hero
