import * as React from "react";

const ServiceCard = ({ title, description, IconAsset }) => {
  return (
    <div className="flex flex-col items-center text-center mx-5 mb-24 md:mb-0 max-w-sm md:max-w-xs">
      <div className="mb-5 text-gray-600">
        <IconAsset
          height={100}
          width={100}
          outline="currentColor"
          color="transparent"
        />
      </div>
      <h3 className="mt-5 mb-8 font-medium text-gray-400">{title}</h3>
      <p className="mb-5 font-normal text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
