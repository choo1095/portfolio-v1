import { Project } from "@/app/types/project";
import Image from "next/image";
import React from "react";

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;

  return (
    <button className="-m-5 p-5 text-left items-start hover:backdrop-blur-sm hover:bg-stone-500 hover:bg-opacity-5 lg:flex lg:gap-5">
      <Image
        className="w-full lg:w-64"
        src={project.thumbnail}
        alt={project.slug}
        width={400}
        height={400}
      ></Image>

      <div>
        <h3>{project.title}</h3>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-900 rounded-full text-stone-200 px-2 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p>{project.description}</p>
      </div>
    </button>
  );
};

export default ProjectCard;
