import * as React from "react";
import ProjectCard from "./components/ProjectCard";
import CapsulaOnlineImage from "@/images/projects/capsula-tempo-online.png";
import TradersClubImage from "@/images/projects/tradersclub.png";
import ClubeGazetaImage from "@/images/projects/clubegazetadopovo.png";
import ClientoolImage from "@/images/projects/clientool.png";
// import EquipeMovelImage from "@/images/projects/equipe-movel.png";
import SigoTradeImage from "@/images/projects/sigo-trade.png";
import { GitHubIcon } from "../../../../assets/svg";

const projectsList = [
  {
    slug: "portfolio/capsula-online",
    image: CapsulaOnlineImage,
    title: "Cápsula do Tempo Online",
    period: "11/2019 - 12/2021 | 01/2023 - current",
    tags: [
      "Kanban",
      "ReactJS",
      "Flutter",
      "JavaScript",
      "NodeJS",
      "ElectronJS",
      "Ruby on Rails",
      "Gatsby",
      "Github Actions",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Styed Components",
      "HTML",
      "CSS",
    ],
  },
  {
    slug: "portfolio/tradersclub",
    image: TradersClubImage,
    title: "TradersClub",
    period: "09/2021 - 12/2022",
    tags: [
      "Scrum",
      "Jira",
      "JavaScript",
      "Typescript",
      "ReactJS",
      "React Native",
      "Golang",
      "MongoDB",
      "Elasticsearch",
      "NATS",
      "Styed Components",
      "HTML",
      "CSS",
    ],
  },
  {
    slug: "portfolio/clube-gazeta",
    image: ClubeGazetaImage,
    title: "Clube Gazeta",
    period: "07/2019 - 10/2020",
    tags: ["Scrum", "ReactJS", "React Native", "NodeJS", "PostgreSQL"],
  },
  {
    slug: "portfolio/clientool",
    image: ClientoolImage,
    title: "ClienTool",
    period: "09/2017 - 11/2018",
    tags: ["Scrum", "MongoDB", "Java", "Grails", "Android"],
  },
  // {
  //   slug: "portfolio/equipe-movel",
  //   image: EquipeMovelImage,
  //   title: "Equipe Móvel",
  //   period: "10/2016 - 08/2017",
  //   tags: [
  //     "PHP",
  //     "Java",
  //     "JavaScript",
  //     "Yii Framework",
  //     "Grails",
  //     "Android",
  //     "MongoDB",
  //     "MySQL",
  //     "jQuery",
  //     "HTML",
  //     "CSS",
  //   ],
  // },
  {
    slug: "portfolio/sigo-trade",
    image: SigoTradeImage,
    title: "Sigo Trade",
    period: "02/2012 - 06/2018",
    tags: [
      "PHP",
      "Java",
      "JavaScript",
      "Grails",
      "Yii Framework",
      "jQuery",
      "MySQL",
      "Android",
      "HTML",
      "CSS",
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-10 mb-10">
      <div className="container">
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
          {projectsList.map((project) => {
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
    </section>
  );
};

export default Projects;
