import * as React from "react";

const Contact = () => {
  return (
    <section className="py-16 md:pt-24 md:pb-32">
      <div className="divider"></div>
      <div className="container">
        <h1 className="text-center my-3 md:mb-5">
          Say Hi to <span className="text-yellow-500">Fabio</span>.
        </h1>
        <h3 className="text-center mt-10 mb-3 p-5 md:p-0 mx-0 md:mx-44">
          If you need to develop a web or mobile application, bring your ideas
          to life, or a career mentorship, feel free to reach out to me.
        </h3>
        <div className="flex justify-center mt-16">
          <a href="/contact" className="btn-primary">
            Hey Fabio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
