import * as React from "react";

const ProjectCard = ({ slug, period, title, image, tags }) => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row items-center justify-between md:gap-5">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h2 className="my-3 px-1 font-bold text-5xl">{title}</h2>
          <h3 className="mb-5 px-2 text-base">{period}</h3>
          <div className="md:pr-5">
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
        <div className="mt-16 md:mt-0 w-1/2 max-h-96">
          <img
            className="object-cover max-h-96 w-full shadow-md shadow-gray-500 rounded-md"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
