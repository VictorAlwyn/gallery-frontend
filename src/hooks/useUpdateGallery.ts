import { useMutation, useQueryClient } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useUpdateGallery = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation((updateGallery) => api.updateGallery(id, updateGallery), {
    onSettled: () => {
      queryClient.invalidateQueries([galleryKey, id]);
      queryClient.invalidateQueries(galleryKey);
    },
  });
};

export default useUpdateGallery;
