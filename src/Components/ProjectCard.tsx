import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { StaticImageData } from 'next/image';

const ProjectCard = ({cardNo, cardTitle, cardParagraph, cardSpan, cardLink, cardImage} : {cardNo : string, cardTitle : string, cardParagraph : string, cardSpan : string, cardLink : string, cardImage : StaticImageData | string}) => {
  return (
    //Project container
    <div className="flex flex-col lg:flex-row justify-between gap-32 mx-20 lg:my-[110px] my-[55px]">
        {/* project content  */}
        <div className="flex flex-col justify-between w-[400px]">

        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-bold">{cardNo}/{cardTitle} </h2>
            </div>
            <div>
                <p className="text-xl font-semibold">{cardParagraph}</p>
            </div>
            <div>
                <span>{cardSpan}</span>
            </div>
        </div>
        <div className="project-link flex font-semibold underline" >
            <p> {cardLink}</p>
            <div className="text-sm ml-1 mt-1">
            <GoArrowUpRight /> 
            </div>
        </div>
        </div>

        {/* projct image  */}
        <div className="lg:w-[670px] w-[100%]">
            <Image src={cardImage} alt="project1"></Image>
        </div>
    </div>
  )
}

export default ProjectCard