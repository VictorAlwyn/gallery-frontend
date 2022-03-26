import React from "react";

type HeaderProps = {
  title: string;
  actions?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ title, actions }) => {
  return (
    <div className="flex flex-row w-full mb-8">
      <div className="mb-6 lg:mb-0 flex-grow">
        <h1 className="sm:text-4xl text-5xl font-bold font-medium title-font mb-2 text-gray-900">
          {title}
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      {actions && actions}
    </div>
  );
};

export default Header;
