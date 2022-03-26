import { useQuery } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useGetGalleries = () => {
  return useQuery(galleryKey, api.getAllGallery);
};

export default useGetGalleries;
