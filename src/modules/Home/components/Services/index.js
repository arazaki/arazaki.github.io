import * as React from "react";
import ServiceCard from "./components/ServiceCard";
import { Screen, UserCheck, Grid } from "@/assets/svg";

const serviceList = [
  {
    title: "Web & Mobile Development",
    description:
      "I specialize in full-cycle web and mobile development using cutting-edge technologies like ReactJS, NodeJS, and Flutter. With expertise in Python, PHP, RubyOnRails, and Golang, I can bring your product to life from ideation to deployment.",
    icon: Screen,
  },
  {
    title: "Product Builder",
    description:
      "As a skilled product builder, I embrace Agile and innovative methodologies like Product Value Proposition and User Mapping Journey. Working closely with real users from inception, I develop and deploy products using the latest technologies, enabling them to evolve constantly through smart failures into successful ventures.",
    icon: Grid,
  },
  {
    title: "Mentorship",
    description:
      "My mentorship program is designed to empower individuals in their careers. I provide personalized guidance, helping you understand your strengths, weaknesses, and context. Together, we'll navigate the path to the next level, with practical exercises to enhance self-confidence.",
    icon: UserCheck,
  },
];

const Services = () => {
  return (
    <section className="pb-5 pt-16 md:pt-24 md:pb-32">
      <div className="container">
        <h1 className="text-center">
          What I <span className="text-yellow-500">do</span>.
        </h1>
        <div className="flex flex-col md:flex-row mt-20 justify-around items-center md:items-start">
          {serviceList.map((service) => {
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                IconAsset={service.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
