import { useMutation, useQueryClient } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useDeleteGallery = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => api.deleteGallery(id), {
    onSettled: () => {
      queryClient.invalidateQueries(galleryKey);
    },
  });
};

export default useDeleteGallery;
