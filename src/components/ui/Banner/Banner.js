"use client";
import bannerImg from "../../../../public/assets/banner.png";
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json";
import Lottie from "lottie-react";
import "./nextBanner.css";

const Banner = () => {
  return (
    <div className="nextBanner opacity-30">
      <div className="grid grid-cols-2">
        <div>
          <Image src={bannerImg} width={200} alt="banner" />
        </div>
        <div style={{ width: "50%" }}>
          <Lottie animationData={lottieProgrammar} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
