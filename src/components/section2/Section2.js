import React from 'react'
import Banner from "../banner/Banner";
import watch1 from "../../assets/Rectangle 31.png";
import watch2 from "../../assets/Rectangle 32.png";
import watch32full from "../../assets/Rectangle 32full.png";
import watch33ful from "../../assets/Rectangle 33full.png";


function Section2() {
    return (
        <div>
            <div className="section2">
                <Banner
                    title={`Elegant Timepieces Collection`}
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor`}
                    btn={`Explore`}
                />
                <div className="img-div">
                    <img className="watchImg main" src={watch1} alt="" />
                    <img className="watchImg main" src={watch2} alt="" />
                    <img className="watchImg full full32" src={watch32full} alt="" />
                    <img className="watchImg full full33" src={watch33ful} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section2
