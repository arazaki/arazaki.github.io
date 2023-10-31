import * as React from "react";
import ProjectCard from "/src/components/ProjectCard";
import { GitHubIcon } from "/src/assets/svg";
import projectsList from "/src/data/projects.json";

const Portfolio = () => {
  return (
    <div className="container mb-40">
      <div className="flex flex-col items-center gap-4 py-5 md:my-20">
        <h1 className="text-4xl md:text-5xl mt-5  text-center">
          My Developer's path
        </h1>
        <a
          href="https://github.com/arazaki"
          target="_blank"
          rel="noreferrer"
          className="pointer hover:underline"
        >
          <div className="flex items-center gap-3 justify-center pointer">
            <GitHubIcon
              width={30}
              height={30}
              outline="currentColor"
              color="currentColor"
            />
            <span className="text-lg">github.com/arazaki</span>
          </div>
        </a>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute w-0.5 h-full bg-gray-300 mx-auto top-0 left-0 right-0"></div>
        {projectsList
          .filter((p) => p.isVisible)
          .map((project) => {
            return (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                image={project.image}
                title={project.title}
                period={project.period}
                tags={project.tags}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
