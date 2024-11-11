// import ProjectCard from "@/components/ProjectCard";
import ProjectCard from "@/Components/ProjectCard";
import { TiArrowDown } from "react-icons/ti"

import project1 from "../../public/images/dining on the lack png.webp"
import project2 from "../../public/images/project2.png"
import project3 from "../../public/images/book-fortfolio.png"
export default function Work() {
  return (
    <div>

      {/* hero section starts */}

      <div className="flex px-20 items-center h-[70vh] gap-16">
      <div className="w-[45%]">
      <h1 className="text-6xl font-semibold text-[#181717]">
        Hello, I&apos;m <br /> Rabia Arif.
      </h1>
      </div>
      <div className="w-[55%] flex text-xl mt-24">
        <p className="font-semibold text-[#606060]">A Senior Web Development Student with the strong grip <br /> on Front-end web designing and development.</p>
      </div>
      </div>
        <div className="px-20 -mt-10 mb-36">
          <p className="text-5xl font-extrabold ">
          <TiArrowDown />
          </p>
        </div>
   
      {/* 1st Card  */}

        <ProjectCard 
        cardNo="01"
        cardTitle=" Dining On The Lack"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project"
        cardImage={project1}
        />

        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

        {/* 2nd card  */}

        <ProjectCard 
        cardNo="02"
        cardTitle="Photo Studio"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project "
        cardImage={project2}/>
        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />
        {/* 3rd card  */}

        <ProjectCard 
        cardNo="03"
        cardTitle="3D Book Protfolio"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project "
        cardImage={project3}/>
        


    </div>
  );
}