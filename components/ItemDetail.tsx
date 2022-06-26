import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ItemDetailProps {
  id?: number;
  name?: string;
  image?: StaticImageData;
  detail?: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ id, name, image, detail }) => {
  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-90 rounded-md p-2 -z-10" />
      <div className="flex flex-col justify-center py-6 px-2 text-gray-100">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="my-10">{detail}</p>
        <Link className="" href="">
          <a className="flex text-yellow-300 space-x-2">
            <span>Link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;
