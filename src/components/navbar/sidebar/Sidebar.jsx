import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({
  collapse,
  isVertical,
  routes,
  brand,
  width,
  widthCollapsed,
  children,
  className
}) => {
  const NavItem = ({ icon, name }) => {
    return (
      <div className="flex items-center my-4 hover:text-font-light2 dark:hover:text-font-dark2 text-font-light dark:text-font-dark">
        <span className="text-2xl">{icon}</span>
        <span className={`pl-2`}>{name}</span>
      </div>
    );
  };

  return (
    <nav className="flex flex col w-60 grow">
      {brand && brand}
      <section className="flex flex-col p-4 w-full">
        {routes
          ? routes.map((navItem, idx) => (
              <Link key={navItem.name + idx} to={navItem.route}>
                <NavItem icon={navItem.icon} name={navItem.name} />
              </Link>
            ))
          : children}
      </section>
    </nav>
  );
};

export default Sidebar;
