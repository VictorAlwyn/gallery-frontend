import { useQuery } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useGetGalleryById = (id: number) => {
  return useQuery([galleryKey, id], ({ queryKey }) =>
    api.getGalleryById(queryKey[1] as number)
  );
};

export default useGetGalleryById;
