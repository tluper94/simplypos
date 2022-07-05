import { useState } from 'react';
import { Link } from 'react-router-dom';

const VerticalNav = ({
  collapse,
  isVertical,
  routes,
  brand,
  width,
  widthCollapsed,
  children,
  className
}) => {
  const handleIsVertical = () => {
    if (isVertical && !collapse) {
      return `${className} absolute flex flex-col ${
        widthCollapsed ? widthCollapsed : 'w-20'
      } 
      ${
        width ? width : 'md:w-60'
      } h-screen backdrop-blur bg-light/80 dark:bg-dark/80`;
    } else if (isVertical && collapse) {
      return `${className} flex flex-col ${
        widthCollapsed ? widthCollapsed : 'w-20'
      } bg-light dark:bg-dark`;
    } else {
      return `${className} flex flex-row w-100 backdrop-blur bg-light/80 dark:bg-dark/80`;
    }
  };

  const classes = {
    wrapper: handleIsVertical(),
    navSection: `flex ${isVertical ? 'flex-col' : 'flex-row ml-auto'}`
  };

  const [onHover, setOnHover] = useState(false);
  const NavItem = ({ icon, name }) => {
    return (
      <div className="flex items-center my-4 hover:text-font-light2 dark:hover:text-font-dark2 text-font-light dark:text-font-dark">
        {isVertical && <span className="text-2xl">{icon}</span>}
        <span className={`${collapse ? 'inline' : 'hidden'} md:inline pl-2`}>
          {name}
        </span>
      </div>
    );
  };

  return (
    <nav className={classes.wrapper}>
      {brand && brand}
      <section className={classes.navSection}>
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

export default VerticalNav;
