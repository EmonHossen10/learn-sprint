import Marquee from "react-fast-marquee";
import Image from "next/image";
import fitbit from '@/public/assets/fitbit-white.png'
import forbes from '@/public/assets/forbes-white.png'
import layerWhite from '@/public/assets/layar-white.png'
import mailchimp from '@/public/assets/mailchimp-white.png'
import vidados from '@/public/assets/vidados-white.png'
export default function Companies() {
    return (
        <div className="mt-20 bg-black h-[420px]">
            <div className="my-5">
                <div className="mb-3 pt-10">
                    <h1 className="text-4xl text-white text-center font-bold">Popular companies that are <br /> collaborating with us.</h1>
                </div>
                <hr className="border-[#016551] border-2 mb-5 max-w-[250px] mx-auto rounded-lg" />
                <div className="bg-[#121220] w-full h-[200px] flex flex-col justify-center">
                    <div className="">
                        <Marquee>
                            <div className="mr-40"><Image src={fitbit} alt="fitbit-logo" /></div>
                            <div className="mr-40"><Image src={forbes} alt="forbes-logo" /></div>
                            <div className="mr-40"><Image src={layerWhite} alt="layer-White-logo" /></div>
                            <div className="mr-40"><Image src={mailchimp} alt="mailchimp-logo" /></div>
                            <div className="mr-40"><Image src={vidados} alt="vidados-logo" /></div>
                        </Marquee>
                    </div>
                </div>
                <div className="pb-10 mt-5 text-center">
                    <h1 className="text-white  font-medium text-sm pb-10">For further queries, please reach out to us at <span className="underline text-red-600">xyz@gmail.com</span></h1>
                </div>
            </div>
        </div>
    );
}
