import React from "react";
import preferences from "@/data/preferences.json";
import { graphql, Link, StaticQuery } from "gatsby";

export default function Background() {
  return (
    <div className="container mb-40">
      <div className="flex flex-col items-center md:my-20">
        <h1 className="text-4xl md:text-5xl my-5 text-center">My Background</h1>
        <p className="text-lg text-center mb-8">
          A summary of what I usually carry with me. From the tools I use to the
          gears I have.
        </p>
        <div className="w-full flex flex-col gap-10 px-5">
          {Object.keys(preferences).map((key) => {
            return (
              <React.Fragment key={key}>
                <div className="w-full">
                  <h2 className="my-5 text-center text-yellow-500 font-medium">
                    {key}
                  </h2>
                  <div className="flex flex-col md:flex-row flex-wrap md:justify-center md:items-stretch items-center gap-5">
                    {preferences[key].map((preference) => {
                      return (
                        <React.Fragment key={preference.name}>
                          <StaticQuery
                            query={graphql`
                              query {
                                allFile(
                                  filter: {
                                    sourceInstanceName: { eq: "images" }
                                  }
                                ) {
                                  edges {
                                    node {
                                      relativePath
                                      publicURL
                                    }
                                  }
                                }
                              }
                            `}
                            render={(data) => {
                              const imagePath = data.allFile.edges.find(
                                (edge) =>
                                  edge.node.relativePath === preference.image
                              )?.node?.publicURL;

                              return (
                                <div className="flex flex-col w-full  justify-start items-start gap-5 box md:flex-row">
                                  <div className="flex justify-start items-center gap-3 md:flex-col">
                                    <img
                                      className="object-contain p-3 min-w-[96px] h-24 w-24 shadow-md shadow-gray-500 dark:shadow-black bg-white rounded-md"
                                      src={imagePath}
                                      alt={preference.name}
                                    />
                                    <div className="max-w-fit flex flex-col justify-start items-start">
                                      <a
                                        href={preference.link}
                                        className="w-full text-left md:text-center text-xl hover:underline hover:text-yellow-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {preference.name}
                                      </a>
                                    </div>
                                  </div>

                                  <div className="flex flex-col md:flex-row justify-center gap-5">
                                    <div className="w-full md:w-1/3">
                                      <h4 className="text-center py-2">Why</h4>
                                      <p className="text-base md:text-lg text-center">
                                        {preference.why}
                                      </p>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                      <h4 className="text-center py-2">When</h4>
                                      <p className="text-base md:text-lg text-center">
                                        {preference.when}
                                      </p>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                      <h4 className="text-center py-2">
                                        Where
                                      </h4>
                                      <ul className="list-disc list-inside">
                                        {preference.projects.map((p) => {
                                          return (
                                            <li
                                              key={p.name}
                                              className="text-base md:text-lg text-center"
                                            >
                                              <Link
                                                className="hover:underline hover:text-yellow-500"
                                                to={p.link}
                                                target="_blank"
                                              >
                                                {p.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
