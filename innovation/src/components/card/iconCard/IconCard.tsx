import Image from "next/image";
import React from "react";

interface IconCardProps {
    image:any;
    title:string;
    description: string;
    navigate: string;
}
const IconCard = (props:IconCardProps) => {
  return (
    <div className="px-4">
      <a
        className="p-4 max-w-max border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href={props.navigate}
      >
        {/* <img
          src="https://loremflickr.com/800/600/girl"
          className="shadow rounded-lg overflow-hidden border"
        /> */}
        <Image
          src={props.image}
          alt="tailwind logo"
          className="rounded-xl h-3/4"
          width={250}
          height={150}
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl">{props.title}</h4>
          <p className="mt-2 text-gray-600">
            {props.description}
          </p>
          {/* <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div> */}
        </div>
      </a>
    </div>
  );
};

export default IconCard;
