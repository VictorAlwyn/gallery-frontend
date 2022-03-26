import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

type AddGalleryFormProps = {
  onSubmit: (data: any) => void;
};

const AddGalleryForm: React.FC<AddGalleryFormProps> = ({ onSubmit }) => {
  const [isDisabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
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

      <div className="flex items-center justify-between">
        <button
          disabled={isDisabled}
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddGalleryForm;
