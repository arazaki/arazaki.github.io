import * as React from "react";
import { Link } from "gatsby";

const ReviewCard = ({ title, review, linkedin }) => {
  return (
    <div className="mt-6 md:mt-6">
      <p className="italic text-gray-600">{review}</p>
      <div className="flex flex-col mt-5 items-start">
        <h3 className="text-left text-base">{title}</h3>
        <Link href={linkedin} target="_blank">
          {linkedin}
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
