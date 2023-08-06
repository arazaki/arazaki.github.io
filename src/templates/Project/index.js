import * as React from "react";
import { graphql } from "gatsby";
import MainLayout from "../../layouts/Main";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Contact from "@/modules/Home/components/Contact";

const ProjectTemplate = ({ data }) => {
  const page = data.projectsJson;
  const image = getImage(data.file);

  return (
    <MainLayout>
      <section>
        <div className="container flex flex-col items-center">
          <h1>{page.title}</h1>
          <h4 className="py-3">{page.period}</h4>
          <p className="py-5 mb-5 text-center lg:px-20">{page.description}</p>
          <div className="flex flex-col md:flex-row w-full gap-5 p-5 md:p-10 bg-slate-100 rounded-lg">
            <div className="md:w-1/2 md:min-w-1/2">
              <div className="flex flex-col items-start text-left mb-5">
                <h3 className="mb-3 font-semibold">Main Activities</h3>
                <ul className="flex flex-col gap-3">
                  {page.activities.map((topic) => {
                    return (
                      <li className="leading-7" key={topic}>
                        <span className="text-yellow-500">●</span> {topic}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col items-start text-left mb-5">
                <h3 className="mb-3 font-semibold">Stack</h3>
                <div className="flex flex-wrap">
                  {page.tags.map((tag) => {
                    return (
                      <span key={tag} className="stack">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <GatsbyImage className image={image} alt={page.title} />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!, $image: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      activities
      description
      period
      tags
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 700, placeholder: BLURRED)
      }
    }
  }
`;

export default ProjectTemplate;
