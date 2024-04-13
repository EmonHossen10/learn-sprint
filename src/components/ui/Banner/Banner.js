"use client";
import bannerImg from "../../../../public/assets/banner.png";
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json";
import Lottie from "lottie-react";
import "./nextBanner.css";

const Banner = () => {
  return (
    <div className="nextBanner bg-opacity-10">
      <div className="flex">
        <div className="flex">
          <Image src={bannerImg} width={600} alt="banner" />
        </div>
        <div style={{ width: "30%" }}>
          <Lottie animationData={lottieProgrammar} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
