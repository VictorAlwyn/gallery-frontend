import { filter, size } from "lodash";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useAddGallery from "../hooks/useAddGallery";
import useGetGalleries from "../hooks/useGetGalleries";

export type GalleryContextState = {
  galleriesWithImage: any[];
  galleriesWithoutImage: any[];
  isLoading: boolean;
  addGallery: (data: any) => void;
};

const contextDefaultValues: GalleryContextState = {
  galleriesWithImage: [],
  galleriesWithoutImage: [],
  isLoading: true,
  addGallery: () => {},
};

const GalleryContext = createContext<GalleryContextState>(contextDefaultValues);

export const useGalleryContext = () => useContext(GalleryContext);

const GalleryProvider: React.FC = ({ children }) => {
  const [galleriesWithImage, setGalleryWithImage] = useState([]);
  const [galleriesWithoutImage, setGalleryWithoutImage] = useState([]);
  const { data: allGalleries, isLoading } = useGetGalleries();
  const { mutate: addGallery } = useAddGallery();

  const categoriesGalleries = useCallback(() => {
    if (size(allGalleries)) {
      const withImage = filter(allGalleries, (gallery) => !!gallery.image);
      const withoutImage = filter(allGalleries, (gallery) => !gallery.image);

      if (size(withImage)) {
        setGalleryWithImage(withImage as any);
      }

      if (size(withoutImage)) {
        setGalleryWithoutImage(withoutImage as any);
      }
    }
  }, [allGalleries]);

  useEffect(() => {
    if (size(allGalleries)) {
      categoriesGalleries();
    }
  }, [categoriesGalleries, allGalleries]);

  return (
    <GalleryContext.Provider
      value={{
        galleriesWithImage,
        galleriesWithoutImage,
        isLoading,
        addGallery,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
