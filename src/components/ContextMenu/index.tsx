import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { map } from "lodash";

type ContextMenuProps = {
  text: string;
  menus: any[];
};

const ContextMenu: React.FC<ContextMenuProps> = ({ text, menus }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
          {text}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-indigo-200 hover:text-indigo-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {map(menus, (menu, idx) => (
            <Menu.Item key={`menu-item-${idx}`}>
              {({ active }) => (
                <button
                  onClick={menu.onClick}
                  className={`${
                    active ? "bg-indigo-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {menu.icon}
                  {menu.text}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ContextMenu;
