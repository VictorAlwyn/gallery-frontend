import { useRouter } from "next/router";
import Header from "../components/Header";
import UpdateGalleryForm from "../components/UpdateGalleryForm";
import useDeleteGallery from "../hooks/useDeleteGallery";
import useGetGalleryById from "../hooks/useGetGalleryById";
import useUpdateGallery from "../hooks/useUpdateGallery";
import useUploadImageGallery from "../hooks/useUploadImageGallery";

const UpdateGallery = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { data, isLoading } = useGetGalleryById(id as number);
  const { mutate: updateGallery } = useUpdateGallery(id as number);
  const { mutate: uploadImageGallery } = useUploadImageGallery(id as number);
  const { mutate: deleteGallery } = useDeleteGallery();

  const handleUpload = async (data: any) => {
    uploadImageGallery(data);
  };

  const handleSubmit = async (data: any) => {
    let formData = new FormData();
    formData.append("image", data.image[0]);

    await handleUpload(formData);

    delete data.image;
    await updateGallery(data);

    router.push("/");
  };

  const handleDelete = async (id: number) => {
    await deleteGallery(id);
    router.push("/");
  };

  if (isLoading) {
    return <p>loading....</p>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Header title={`Update Gallery ID ${id}`} />

          <UpdateGalleryForm
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            initialValues={data}
          />
        </div>
      </section>
    </>
  );
};

export default UpdateGallery;
