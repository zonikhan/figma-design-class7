import Image from "next/image"
import myImage from "../../../public/images/SR-yellow.jpg"
import { GoArrowRight } from "react-icons/go";

const page = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col md:m-20 m-10 gap-16 justify-between">
        <div className="flex flex-col lg:gap-10 md:gap-6 gap-10 lg:w-[40%] md:w-[50%]">
      <h1 className="lg:text-5xl text-4xl">
        Hi I&apos;m Rabia Arif, Frontend Web Developer
      </h1>
      <p className="text-lg">Hello! I am Rabia Arif, I am a web developer with 2 years of frontend and 1 year of backend experince, I have developed several website with my professional skills and help many businesses to grow in the market.</p>
      <p className="text-lg">My Experience over the years growing a lot with new learnings and demands in Tech field.</p>
        </div>
        <div className="lg:w-[37%] md:w-[40%] h-[400px] overflow-hidden">
            <Image src={myImage} alt="image" width={380}></Image>
        </div>
    </div>

    <div className="flex flex-col gap-24 md:mx-20 mx-10 my-32 lg:w-[50%] md:w-[70%]">
      <div className="flex sm:flex-row flex-col md:gap-20 gap-10">
        <h1 className="text-xl font-semibold underline lg:w-[30%] sm:w-[50%]">Main Projects</h1>
        <p className="text-lg lg:w-[70%]">Dining on th Lack, 3d Book Portfolio, Animated Portfolio, Photo-Pix, Photography Agency</p>
      </div>

      <div className="flex sm:flex-row flex-col md:gap-20 gap-10">
        <h1 className="text-xl font-semibold underline lg:w-[30%] sm:w-[42%]">Main Skills</h1>
        <p className="text-lg lg:w-[70%]">HTML, CSS, JavaScript, Typescrip, Next.js, Tailwind, Bootstrap, Three.js, GSAP</p>
        
      </div>
    </div>
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <div className="flex sm:flex-row flex-col  justify-between gap-12 md:mx-20 mx-10 my-20">
        <h1 className="text-2xl flex font-semibold">I am Thrilled to answer to <br /> your next project <span className="mt-10 -ml-20 "><GoArrowRight className="sm:rotate-0 rotate-90" /></span></h1>
        
        <div className="sm:mr-10">
        <h2 className="text-lg font-semibold sm:mb-4">rabiaarif@gmail.com</h2>
        <p className="underline cursor-pointer w-[100px]">View resume</p>
        </div>
      </div>
    </>
  )
}

export default page