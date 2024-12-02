
import ProjectCard from "@/components/ProjectCard";
import { TiArrowDown } from "react-icons/ti"

import project1 from "../../public/images/dining on the lack png.webp"
import project2 from "../../public/images/project2.png"
import project3 from "../../public/images/book-fortfolio.png"
export default function Work() {
  return (
    <div>

      {/* hero section starts */}

      <div className="flex md:flex-row flex-col md:px-20 px-10 md:items-center justify-center sm:h-[70vh] h-[50vh] lg:gap-16 gap-8">
      <div className="">
      <h1 className="lg:text-6xl md:text-5xl sm:text-6xl text-4xl font-semibold text-[#181717]">
        Hello, I&apos;m <br /> Rabia Arif.
      </h1>
      </div>
      <div className=" flex text-xl md:mt-24">
        <p className="font-semibold text-[#606060]">A Senior Web Development Student with the strong grip <br /> on Front-end web designing and development.</p>
      </div>
      </div>
        <div className="md:px-20 px-10 sm:-mt-10 md:mb-36">
          <p className="sm:text-5xl text-3xl font-extrabold ">
          <TiArrowDown />
          </p>
        </div>
   
      {/* 1st Card  */}

        <ProjectCard 
        cardNo="01"
        cardTitle=" Dining On The Lack"
        cardParagraph="Thi is a food selling website which I created for a Russian client."
        cardSpan="This project was really helpfull for my client and he really loved it."
        cardLink="More shots from This Project"
        cardImage={project1}
        />

        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

        {/* 2nd card  */}

        <ProjectCard 
        cardNo="02"
        cardTitle="Photo Studio"
        cardParagraph="This is my own photo studio website which I created for my business and Hired a team for my studio."
        cardSpan="This website really helped me to grow my studio and reaching internationl clients "
        cardLink="More shots from This Project "
        cardImage={project2}/>
        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />
        {/* 3rd card  */}

        <ProjectCard 
        cardNo="03"
        cardTitle="Static Resume"
        cardParagraph="This is a My Static Resume Website which I created for Resume builder ."
        cardSpan="This is my personal static Resume which I created with HTML CSS and JavaScript."
        cardLink="More shots from This Project "
        cardImage={project3}/>
        


    </div>
  );
}