import Link from "next/link";
import React from "react";

type GalleryItemProps = {
  gallery: any;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ gallery }) => {
  return (
    <Link href={`/${gallery?.id}`} passHref>
      <div className="lg:w-1/4 p-4 w-1/2">
        {gallery.image && (
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt={gallery.title}
              className="object-cover object-center w-full h-full block"
              src={gallery.image}
            />
          </a>
        )}
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {gallery.title}
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {gallery.description}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
