import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface MyProjectsProps {
  projects: allDataType["projects"];
}

const MyProjects: FC<MyProjectsProps> = ({ projects }) => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">My projects</h1>
      {projects?.map((project, index) => (
        <div
          key={index}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="m-auto ">
                <img
                  className="w-[500px] h-[400px] rounded-[12px] m-auto"
                  src={project?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{project.title}</h1>
            <p className="text-[20px] text-justify my-3">
              {project.description}
            </p>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> Live Demo</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]"
              >
                <FaGithub size={25} />
                <span> View Github</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyProjects;
