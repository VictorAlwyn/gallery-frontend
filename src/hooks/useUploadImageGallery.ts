import { useMutation, useQueryClient } from "react-query";
import api from "../apis";
import { galleryKey } from "../constants";

const useUploadImageGallery = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation((data) => api.uploadImageGallery(id, data), {
    onSettled: () => {
      queryClient.invalidateQueries([galleryKey, id]);
      queryClient.invalidateQueries(galleryKey);
    },
  });
};

export default useUploadImageGallery;
