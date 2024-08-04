import { Project } from "@/types/project";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import ProjectSheet from "./ProjectSheet";
import CommonImage from "../common/CommonImage";
import HyperlinkSvg from "../common/svg/HyperlinkSvg";

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;

  return (
    <Sheet open={false}>
      {/* Project Card Button */}
      <SheetTrigger className="hover:cursor-default group/project-card -m-5 p-5 text-left items-start rounded-sm hover:backdrop-blur-md hover:bg-stone-500/5 sm:grid sm:gap-5 sm:grid-cols-5">
        <div className="overflow-clip sm:col-span-2">
          <CommonImage
            className="w-full group-hover/project-card:scale-105 delay-100 duration-300"
            // className="w-full"
            src={project.thumbnail}
            alt={project.slug}
            width={400}
            height={240}
          ></CommonImage>
        </div>

        <div className="sm:col-span-3">
          {/* Project title */}
          <h3 className="mt-5 sm:mt-0">{project.title}</h3>

          {/* Project type e.g. web, mobile */}
          <div className="flex flex-wrap gap-1 mt-0.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-900 rounded-full text-stone-200 px-2.5 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-stone-600 mt-3 leading-normal">
            {project.description}
          </p>

          {/* Link */}
          {project.links && (
            <div className="flex items-center flex-wrap mt-3 gap-x-2">
              {project.links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  className="group/project-link text-stone-500 flex items-center"
                >
                  <HyperlinkSvg
                    width={12}
                    height={12}
                    className="fill-stone-500 mr-0.5 group-hover/project-link:fill-primary-900"
                  ></HyperlinkSvg>
                  <span className="text-sm group-hover/project-link:text-primary-900 group-hover/project-link:underline">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <p className="flex flex-wrap mt-5">
            {project.tools.map((tool, index) => (
              <>
                <span
                  key={tool}
                  className="text-primary-900 text-sm font-medium"
                >
                  #{tool}
                </span>
                {index < project.tools.length - 1 && (
                  <span className="text-sm font-medium">&nbsp;</span>
                )}
              </>
            ))}
          </p>
        </div>
      </SheetTrigger>

      {/*  Project Details Sheet */}
      <ProjectSheet
        className="w-dvw sm:w-[80dvw] sm:max-w-2xl"
        slug={project.slug}
      ></ProjectSheet>
    </Sheet>
  );
};

export default ProjectCard;
