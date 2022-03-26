import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { size } from "lodash";
import { title } from "process";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

type UpdateGalleryFormProps = {
  onSubmit: (data: any) => void;
  onDelete: (id: number) => void;
  initialValues: any;
};

const UpdateGalleryForm: React.FC<UpdateGalleryFormProps> = ({
  onSubmit,
  onDelete,
  initialValues,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (size(initialValues)) {
      setValue("title", initialValues.title);
      setValue("description", initialValues.description);
    }
  }, [initialValues, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-4"
      encType="multipart/form"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-normal mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("title")}
        />
        <p className="text-red-500 mt-2">{errors.title?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-normal mb-2">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...register("description")}
        />
        <p className="text-red-500">{errors.description?.message}</p>
      </div>

      {initialValues?.image && (
        <img
          src={initialValues?.image}
          alt={initialValues.title}
          className="w-48 w-48"
        />
      )}

      <div className="mb-6 mt-3">
        <label className="block text-gray-700 text-sm font-normal mb-2">
          Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          {...register("image")}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          type="submit"
        >
          Submit
        </button>
        <button
          onClick={() => onDelete(initialValues.id)}
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default UpdateGalleryForm;
