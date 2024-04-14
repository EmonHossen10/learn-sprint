"use client";
import bannerImg from "../../../../public/assets/banner.png";
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json";
import Lottie from "lottie-react";
import "./nextBanner.css";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image src={bannerImg} width={500} alt="banner" />
        </div>
        <div style={{ width: "40%" }}>
          <Lottie animationData={lottieProgrammar} />
        </div>
      </div>
     </div>
  );
};

export default Banner;
