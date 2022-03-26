import { useMutation, useQueryClient } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useAddGallery = () => {
  const queryClient = useQueryClient();

  return useMutation((newGallery) => api.addGallery(newGallery), {
    onSettled: () => {
      queryClient.invalidateQueries(galleryKey);
    },
  });
};

export default useAddGallery;
