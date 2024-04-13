"use client";
import bannerImg from "../../../../public/assets/banner.png";
import Image from "next/image";
import lottieProgrammar from "../../../../public/programmer.json";
import Lottie from "lottie-react";
import "./nextBanner.css";

const Banner = () => {
  return (
    <div className="nextBanner bg-opacity-10">
      {/* <div className="flex">
        <div className="flex">
          <Image src={bannerImg} width={600} alt="banner" />
        </div>
        <div style={{ width: "30%" }}>
          <Lottie animationData={lottieProgrammar} />
        </div>
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('../../../../public/assets/banner221.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <div style={{ width: "30%" }}>
              <Lottie animationData={lottieProgrammar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
