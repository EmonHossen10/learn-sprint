import banner from "@/assets/banner.png"
import Image from "next/image";

const Featured = () => {
    return (
        <div>
            <Image 
                src={banner}
                width= {500}
                alt="banner"
                 />
        </div>
    );
};

export default Featured;