import * as React from "react";
import { Link } from "gatsby";

const ReviewCard = ({ title, review, linkedin }) => {
  return (
    <div className="mt-6 md:mt-6">
      <p className="italic text-gray-600 dark:text-slate-400">{review}</p>
      <div className="flex flex-col mt-5 items-start">
        <h3 className="text-left text-base dark:text-slate-100">{title}</h3>
        <Link href={linkedin} target="_blank">
          {linkedin}
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
