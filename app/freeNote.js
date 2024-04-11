import note from '@/public/assets/notes.png'
import Image from 'next/image'
import { IoCloudDownloadOutline } from "react-icons/io5";
export default function FreeNotes() {
    return (
        <secttion className="max-w-7xl mx-auto bg-black grid grid-cols-4 rounded-lg mt-10">
            <div className='grid items-center col-span-3'>
                <div className='ml-20'>
                    <h1 className='font-semibold text-4xl mb-5'>Get Exclusive <span className='text-[#1CAB55]'>notes!!!</span> created by our <br /> Experienced Teachers.</h1>
                    <button className='bg-[#1CAB55] px-6 py-2 rounded-lg flex justify-center items-center gap-5'>Download Now <IoCloudDownloadOutline /></button>
                </div>
            </div>
            <div className='flex justify-center items-center mr-10'>
                <Image src={note} alt='Notes'></Image>
            </div>
        </secttion>
    )
}