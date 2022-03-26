import axios from "axios";

const instance = axios.create({
  baseURL: "https://simple-gallery-1.herokuapp.com/api/v1",
});

const getAllGallery = async () => {
  const galleries = await instance.get("/gallery");

  return galleries.data;
};

const getGalleryById = async (id: number) => {
  const galleries = await instance.get(`/gallery/${id}`);

  return galleries.data;
};

const addGallery = async (data: any) => {
  return await instance.post("/gallery", data);
};

const updateGallery = async (id: number, data: any) => {
  return await instance.put(`/gallery/${id}`, data);
};

const deleteGallery = async (id: number) => {
  return await instance.delete(`/gallery/${id}`);
};

const uploadImageGallery = async (id: number, data: any) => {
  return await instance.post(`/gallery/upload/${id}`, data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

const services = {
  addGallery,
  deleteGallery,
  getAllGallery,
  getGalleryById,
  updateGallery,
  uploadImageGallery,
};

export default services;
