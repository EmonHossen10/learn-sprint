import bannerImg from "@/projectassets/banner.png"
import Image from "next/image";

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
            <div>
                <h2>animation</h2>
            </div>
        </div>
    );
};

export default Banner;