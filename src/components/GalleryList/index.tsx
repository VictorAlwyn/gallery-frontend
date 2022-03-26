import React from "react";
import GalleryItem from "./GalleryItem";

type GalleryListProps = {
  galleries: any[];
};

const GalleryList: React.FC<GalleryListProps> = ({ galleries }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {galleries.map((gallery: any) => (
        <GalleryItem gallery={gallery} key={`gallery-item-${gallery?.id}`} />
      ))}
    </div>
  );
};

export default GalleryList;
