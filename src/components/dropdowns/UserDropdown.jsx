import { Menu, Transition } from '@headlessui/react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const UserDropdown = ({ routes }) => {
  const dropDownItems = () => {
    return (
      routes &&
      routes.map(route => (
        <div key={route.name + 'navDrop'}>
          <Link to={route.route}>
            <div className="flex flex-row hover:text-font-light2 dark:hover:text-font-dark2">
              <span className="text-2xl">{route.icon}</span>
              <span className={`md:inline pl-2`}>{route.name}</span>
            </div>
          </Link>
        </div>
      ))
    );
  };
  return (
    <Dropdown
      icon={<HiOutlineUserCircle size="30px" />}
      items={dropDownItems()}
    />
  );
};

export default UserDropdown;
