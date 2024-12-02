

import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { StaticImageData } from 'next/image';

const ProjectCard = ({cardNo, cardTitle, cardParagraph, cardSpan, cardLink, cardImage} : {cardNo : string, cardTitle : string, cardParagraph : string, cardSpan : string, cardLink : string, cardImage : StaticImageData | string}) => {
  return (
    //Project container
    <div className="flex flex-col lg:flex-row justify-between md:gap-32 gap-16 md:mx-20 mx-10 lg:my-[110px] my-[55px]">
        {/* project content  */}
        <div className="flex flex-col justify-between md:w-[400px]">

        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-bold">{cardNo}/{cardTitle} </h2>
            </div>
            <div>
                <p className="sm:text-xl text-lg font-semibold">{cardParagraph}</p>
            </div>
            <div >
                <span>{cardSpan}</span>
            </div>
        </div>
        <div className="project-link flex font-semibold underline mt-1" >
            <p className="cursor-pointer"> {cardLink}</p>
            <div className="text-sm ml-1 mt-1">
            <GoArrowUpRight /> 
            </div>
        </div>
        </div>

        {/* projct image  */}
        <div className="lg:w-[670px] sm:w-[100%]">
            <Image className="lg:h-[300px] md:h-[400px] sm:h-[300px] h-[200px]" src={cardImage} alt="project1"></Image>
        </div>
    </div>
  )
}

export default ProjectCard
