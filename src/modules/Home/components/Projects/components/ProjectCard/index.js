import * as React from "react";

const ProjectCard = ({ slug, period, title, image, tags }) => {
  return (
    <div className="py-10">
      <div className="md:pb-2 flex flex-col md:flex-row justify-between items-center md:gap-20">
        <h2 className="md:text-right my-3 px-1 font-bold text-2xl md:w-1/2 ">
          {title}
        </h2>
        <h3 className="mb-5 px-2 md:m-0 text-base md:w-1/2 ">{period}</h3>
      </div>
      <div className="container flex flex-col md:flex-row items-center justify-center md:gap-10">
        <div className="flex justify-end px-5 md:p-0 mb-6 md:my-0 w-full md:w-1/2 max-h-40">
          <img
            className="object-cover max-h-40 w-full md:w-56 shadow-md shadow-gray-500 dark:shadow-black rounded-md"
            src={image}
            alt={title}
          />
        </div>
        <div className="hidden md:block bg-yellow-500 h-3 w-3 rounded-full z-10"></div>
        <div className="flex flex-col md:items-start items-center md:w-1/2">
          <div className="md:pr-5 md:text-left max-w-lg">
            {tags.map((tag) => {
              return (
                <span key={tag} className="stack">
                  {tag}
                </span>
              );
            })}
          </div>
          <a href={slug} className="btn-primary mt-10">
            See this project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
