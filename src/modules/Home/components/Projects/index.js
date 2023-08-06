import * as React from "react";
import ProjectCard from "./components/ProjectCard";
import CapsulaOnlineImage from "@/images/projects/capsula-tempo-online.png";
import TradersClubImage from "@/images/projects/tradersclub.png";
import ClubeGazetaImage from "@/images/projects/clubegazetadopovo.png";
import CapsulaTempoImage from "@/images/projects/capsula-do-tempo.png";
import ClientoolImage from "@/images/projects/clientool.png";
import EquipeMovelImage from "@/images/projects/equipe-movel.png";
import SigoTradeImage from "@/images/projects/sigo-trade.png";

const projectsList = [
  {
    slug: "portfolio/capsula-online",
    image: CapsulaOnlineImage,
    title: "Cápsula do Tempo Online",
    period: "01/2023 - current",
    tags: [
      "Kanban",
      "Firebase",
      "React",
      "Flutter",
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "Gatsby",
      "Github Actions",
    ],
  },
  {
    slug: "portfolio/tradersclub",
    image: TradersClubImage,
    title: "TradersClub",
    period: "09/2021 - 12/2022",
    tags: [
      "Scrum",
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "React Native",
      "Golang",
      "MongoDB",
      "Elasticsearch",
      "React",
      "NATS",
      "Kafka",
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
    slug: "portfolio/capsula-do-tempo",
    image: CapsulaTempoImage,
    title: "Cápsula do Tempo",
    period: "11/2019 - 12/2021",
    tags: [
      "Ruby on Rails",
      "MongoDB",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "ElectronJS",
      "NodeJS",
    ],
  },
  {
    slug: "portfolio/clientool",
    image: ClientoolImage,
    title: "ClienTool",
    period: "09/2017 - 11/2018",
    tags: ["Scrum", "MongoDB", "Java", "Grails", "Android"],
  },
  {
    slug: "portfolio/equipe-movel",
    image: EquipeMovelImage,
    title: "Equipe Móvel",
    period: "10/2016 - 08/2017",
    tags: [
      "PHP",
      "MySQL",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Java",
      "Grails",
      "Yii Framework",
      "Android",
    ],
  },
  {
    slug: "portfolio/sigo-trade",
    image: SigoTradeImage,
    title: "Sigo Trade",
    period: "02/2012 - 06/2018",
    tags: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Java",
      "Grails",
      "Yii Framework",
      "Android",
    ],
  },
];

const Projects = () => {
  return (
    <div>
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
  );
};

export default Projects;
