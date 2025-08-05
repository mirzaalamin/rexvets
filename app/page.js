import { FaRegClock } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { MdVideoCall } from "react-icons/md";
import { IoStar } from "react-icons/io5";

import Image from "next/image";
import Video from "@/components/Video";
import LogoCarousel from "@/components/LogoCarousel";




export default function Home() {
  return (
    <div className="">

      {/* column 1 */}
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,_rgb(15,12,41)_0%,_rgb(36,36,62)_25%,_rgb(48,43,99)_50%,_rgb(15,52,96)_75%,_rgb(0,35,102)_100%)] w-full h-full min-h-screen p-3">


        <div className="flex flex-col lg:flex-row gap-2 lg:gap-30 lg:w-[1480px] m-auto px-10">

          <div className="flex flex-auto lg:w-[700px] flex-col justify-center lg:justify-start items-center lg:items-start py-10 gap-10">
            <div className="flex flex-col gap-10">
              <div className="bg-[#636789] pulse-badge text-white rounded-full w-[300px] p-1 text-center m-auto lg:m-0">
                <span className="absolute top-0 left-2 text-blue-400 text-xl animate-bounce-rotate">
                  {/* <!-- Inline your SVG here --> */}
                  <Image src="./icons/stars.svg" height={24} width={24} />
                </span>
                🏥 Non-Profit Veterinary Care</div>

              <h1 className="text-[3rem] lg:text-[96px] font-extrabold text-white text-center lg:text-left leading-16 lg:leading-28 font-helvetica">Low-Cost <br />
                <span className="bg-gradient-to-r from-[#5E8AD9] to-[#B66DBB] bg-clip-text text-transparent">Veterinary Care</span>
              </h1>


              <div className="text-[#60A5FA] text-[15px] lg:text-[24px] text-center font-bold flex items-center justify-center lg:justify-start gap-3"><FaRegClock size={24} /> <span>24/7 Online Vet Appointments - Ask a Vet</span></div>
              <p className="text-white font-bold leading-10 text-center lg:text-left text-[17px] lg:text-[1.3rem] lg:w-[700px]">As a non-profit organization, Rex Vets provides affordable telehealth consultations to ensure every pet gets the care they deserve from the comfort of home. Breaking barriers, building bonds.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-wrap items-center gap-2 md:flex-row ">
                <Button className="glowing-button bg-[linear-gradient(45deg,_rgb(59,130,246)_0%,_rgb(139,92,246)_50%,_rgb(236,72,153)_100%)] rounded-full w-[450px] lg:w-[250px] py-8 font-bold text-[16px] cursor-pointer"><Image src="/icons/video-icon.svg" alt="video icon" width={24} height={24} /> Book Consultation</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:flex-row ">
                <Button className="glowing-button-2 backdrop-blur-md bg-white/10 hover:bg-white/30 border-2 border-gray-400 p-6 shadow-lg rounded-full w-[450px] lg:w-[250px] py-8 font-bold text-[16px] cursor-pointer"><Image src="/icons/heart.svg" alt="heart icon" width={20} height={20} /> Support Our Mission </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex items-center justify-center gap-2 text-[16px] font-bold text-white">
                {[1, 2, 3, 4, 5].map(item => <IoStar key={item} color="#FABF25" />)}
                <span>4.9/5 Rating</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[16px] font-bold text-white lg:border-l-2 lg:border-r-2 px-8 lg:border-gray-400">
                <Image src="/icons/secure.svg" alt="secure icon" width={20} height={20} />
                <span>10k+ Happy Pet Owners</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[16px] font-bold text-white">
                <Image src="/icons/secure-sheild.svg" alt="secure sheild icon" width={20} height={20} />
                <span>100% Secure</span>
              </div>
            </div>
          </div>

          {/* column 2 */}

          <div className="flex flex-auto flex-col justify-center items-center py-10 gap-10 lg:w-[400px]">
            <div className="text-center flex flex-col gap-3 ">
              <h1 className="text-[28px] lg:text-[40px] font-bold text-white ">Meet Our CEO <br />
              </h1>
              <h6 className="font-bold text-[20px] bg-gradient-to-r from-[#779CFA] to-[#9193F9] bg-clip-text text-transparent">Dr. Tiffany Delacruz, DVM</h6>
            </div>
            <div className="backdrop-blur-md bg-white/10 px-7 pt-7 rounded-3xl">
              <Video />
            </div>
          </div>


        </div>

      </div>

      <div className="bg-[#021130] flex flex-col lg:flex-row items-center">
        <div className="py-5 px-2 text-center lg:text-left w-full lg:w-[300px] lg:pr-15">
          <h5 className="text-[20px] text-white font-bold">
            Award winning & featured in...
          </h5>
        </div>
        <LogoCarousel />
      </div>
    </div>
  );
}
