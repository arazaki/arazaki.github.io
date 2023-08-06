import * as React from "react";
import ReviewCard from "./components/ReviewCard";
import FabioImage from "@/images/fabio-pb.jpg";

const reviewList = [
  {
    linkedin: "https://www.linkedin.com/in/helciofranco/",
    title: "Helcio Franco",
    review:
      "Fabio's work reflects creativity, persuasion, and meticulous attention to detail, accompanied by exceptional communication skills. I greatly enjoy collaborating with him, and he's an outstanding software developer I highly value!",
  },
];

const Reviews = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="">
          <img
            className="max-h-40rem rounded-lg"
            src={FabioImage}
            alt="Fabio Arazaki"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:w-6/12 px-10 md:p-0">
          <h1 className="my-5">Reviews.</h1>
          <h3 className="my-5">What people say about Fabio.</h3>
          {reviewList.map((review) => {
            return (
              <ReviewCard
                linkedin={review.linkedin}
                title={review.title}
                review={review.review}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
