"use client"
import bannerImg from "../../../../public/assets/banner.png"
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json"
import Lottie from "lottie-react"
import "./nextBanner.css"


const Banner = () => {
    return (
        <div className="nextBanner h-screen md:flex justify-center items-center">
            <div>
                <Image 
                    src={bannerImg}
                    width={500}
                    alt="banner"
                />
            </div>
            <div style={{width:"50%"}}>
                <Lottie animationData={lottieProgrammar} />
            </div>
        </div>
    );
};

export default Banner;