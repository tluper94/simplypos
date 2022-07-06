import { Menu, Transition } from '@headlessui/react';
import { MdMenu } from 'react-icons/md';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ routes }) => {
  return (
    <Menu as="div" className="relative items-center h-full">
      <Menu.Button className="inline-flex justify-center items-center">
        <MdMenu size="30px" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-48 right-0 p-4 rounded-md bg-gray-200 dark:bg-darkMono">
          {routes &&
            routes.map(route => (
              <div key={route.name + 'navDrop'} className="mb-5 last:mb-0">
                <Menu.Item>
                  <Link to={route.route}>
                    <div className="flex flex-row hover:text-font-light2 dark:hover:text-font-dark2">
                      <span className="text-2xl">{route.icon}</span>
                      <span className={`md:inline pl-2`}>{route.name}</span>
                    </div>
                  </Link>
                </Menu.Item>
              </div>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavDropdown;
