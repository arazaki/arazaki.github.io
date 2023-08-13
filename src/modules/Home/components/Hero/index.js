import * as React from "react";
import FabioImage from "@/images/fabio-smile-seating.jpg";

const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl my-3 md:mt-5">Hi. I'm Fabio</h1>
          <p>
            I am a Web & Mobile Developer and an Entrepreneur with over 10 years
            of experience. I am a specialist in creating web and mobile
            applications, collaborating with startups, large companies, and
            working as a freelancer. If you have an exciting project and need
            support, feel free to reach out to me.
          </p>
        </div>
        <div>
          <img
            className="mt-8 md:mt-0 h-80 w-80 md:h-96 md:w-96 object-cover object-top rounded-full shadow-sm"
            src={FabioImage}
            alt="Fabio Arazaki"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
