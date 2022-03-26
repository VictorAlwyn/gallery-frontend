import type { NextPage } from "next";
import ContextMenu from "../components/ContextMenu";
import Header from "../components/Header";
import { useGalleryContext } from "../context/galleryContext";
import { ChevronDownIcon } from "@heroicons/react/solid";
import GalleryList from "../components/GalleryList";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";
import { useState } from "react";
import { size } from "lodash";
import AddGalleryForm from "../components/AddGalleryForm";

const Home: NextPage = () => {
  const [hasImage, setHasImage] = useState(true);
  const { isOpen, openModal, closeModal } = useModal();
  const { galleriesWithImage, galleriesWithoutImage, isLoading, addGallery } =
    useGalleryContext();

  const menus = [
    {
      text: "Add",
      icon: (
        <ChevronDownIcon
          className="w-5 h-5 mx-2 text-indigo-200 hover:text-indigo-100"
          aria-hidden="true"
        />
      ),
      onClick: () => openModal(),
    },
    {
      text: "With Image",
      icon: (
        <ChevronDownIcon
          className="w-5 h-5 mx-2 text-indigo-200 hover:text-indigo-100"
          aria-hidden="true"
        />
      ),
      onClick: () => setHasImage(true),
    },
    {
      text: "Without Image",
      icon: (
        <ChevronDownIcon
          className="w-5 h-5 mx-2 text-indigo-200 hover:text-indigo-100"
          aria-hidden="true"
        />
      ),
      onClick: () => setHasImage(false),
    },
  ];

  const handleSubmit = async (data: any) => {
    await addGallery(data);
    closeModal();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Header
            title={
              hasImage
                ? `${size(galleriesWithImage)} Gallery with Image`
                : `${size(galleriesWithoutImage)} Gallery without Image`
            }
            actions={<ContextMenu text="Options" menus={menus} />}
          />
          <GalleryList
            galleries={hasImage ? galleriesWithImage : galleriesWithoutImage}
          />
        </div>
      </section>

      <Modal isOpen={isOpen} closeModal={closeModal} title={"Add Gallery"}>
        <div className="mt-2">
          <AddGalleryForm onSubmit={handleSubmit} />
        </div>
      </Modal>
    </>
  );
};

export default Home;
