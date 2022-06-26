import React from "react";
import { StaticImageData } from "next/image";

interface ItemDetailProps {
  id?: number;
  name?: string;
  image?: StaticImageData;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ id, name, image }) => {
  return (
    <div className="w-full h-full">
      <span>{name}</span>
    </div>
  );
};

export default ItemDetail;
