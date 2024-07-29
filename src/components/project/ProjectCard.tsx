import { Project } from "@/types/project";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import ProjectSheet from "./ProjectSheet";

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;

  return (
    <Sheet>
      {/* Project Card Button */}
      <SheetTrigger className="-m-5 p-5 text-left items-start rounded-sm hover:backdrop-blur-md hover:bg-stone-500/5 lg:flex lg:gap-5">
        <Image
          className="w-full lg:w-64"
          src={project.thumbnail}
          alt={project.slug}
          width={400}
          height={400}
        ></Image>

        <div>
          <h3 className="mt-5 lg:mt-0">{project.title}</h3>

          <div className="flex flex-wrap gap-1 mt-0.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-900 rounded-full text-stone-200 px-2 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="line-clamp-6 text-stone-600 mt-3 leading-normal lg:line-clamp-4">
            {project.description}
          </p>
        </div>
      </SheetTrigger>

      {/*  Project Details Sheet */}
      <ProjectSheet
        className="w-dvw sm:w-[80dvw] sm:max-w-4xl"
        slug={project.slug}
      ></ProjectSheet>
    </Sheet>
  );
};

export default ProjectCard;