import Image from "next/image"
import myImage from "../../../public/images/SR-yellow.jpg"
import { GoArrowRight } from "react-icons/go";
const page = () => {
  return (
    <>
    <div className="flex m-20 justify-between">
        <div className="flex flex-col gap-10 w-[40%]">
      <h1 className="text-5xl">
        Hi I&apos;Rabia arif, Frontend Web Developer
      </h1>
      <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate recusandae minima sapiente eius nulla eligendi nobis distinctio illum sunt eaque!</p>
      <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium sint aut qui, debitis quis?</p>
        </div>
        <div className="w-[37%] h-[400px] overflow-hidden">
            <Image src={myImage} alt="image" width={380}></Image>
        </div>
    </div>

    <div className="flex flex-col gap-24 mx-20 my-32 w-[50%]">
      <div className="flex gap-20">
        <h1 className="text-xl font-semibold underline w-[30%]">Main Projects</h1>
        <p className="text-lg w-[70%]">Dining on th Lack, 3d Book Portfolio, Animated Portfolio, Photo-Pix, Photography Agency</p>
      </div>

      <div className="flex gap-20">
        <h1 className="text-xl font-semibold underline w-[30%]">Main Skills</h1>
        <p className="text-lg w-[70%]">HTML, CSS, JavaScript, Typescrip, Next.js, Tailwind, Bootstrap, Three.js, GSAP</p>

      </div>
    </div>
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <div className="flex mx-20 justify-between my-20">
        <h1 className="text-2xl flex font-semibold">I am Thrilled to answer to <br /> your next project <span className="mt-10 -ml-20 "><GoArrowRight /></span></h1>

        <div className="mr-10">
        <h2 className="text-lg font-semibold mb-4">zonikhan@361gmail.com</h2>
        <p className="underline">View resume</p>
        </div>
      </div>
    </>
  )
}

export default page