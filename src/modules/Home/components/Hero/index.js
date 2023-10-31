import * as React from "react";
import FabioImage from "@/images/fabio-smile-seating.jpg";

const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl my-3 md:mt-5">Hi. I'm Fabio</h1>
          <div className="flex flex-col gap-2">
            <p>
              I am a Web & Mobile Developer and an Entrepreneur with over 10
              years of experience.
            </p>
            <p>
              I am a specialist in creating web and mobile applications,
              collaborating with startups, large companies, and working as a
              freelancer.
            </p>
            <p>
              If you have an exciting project and need support, send me a ping.
            </p>
          </div>
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
