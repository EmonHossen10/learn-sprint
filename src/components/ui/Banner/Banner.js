"use client"
import bannerImg from "../../../../public/assets/banner.png"
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json"
import Lottie from "lottie-react"


const Banner = () => {
    return (
        <div>
            {/* <h1>This is banner</h1> */}
            <div>
                <Image 
                    src={bannerImg}
                    width={500}
                    alt="banner"
                />
            </div>
            <div style={{width:"30%"}}>
                <Lottie animationData={lottieProgrammar} />
            </div>
      </div>
    );
};

export default Banner;