import { Link } from 'react-router-dom';

const VerticalNav = ({
  collapse,
  isVertical,
  routes,
  brand,
  width,
  widthCollapsed
}) => {
  const NavItem = ({ icon, name }) => {
    return (
      <div className="flex items-center my-2">
        <span className="text-xl text-font-light dark:text-font-dark">
          {icon}
        </span>
        <span className="hidden md:inline text-font-light dark:text-font-dark pl-2">
          {name}
        </span>
      </div>
    );
  };

  const handleIsVertical = () => {
    if (isVertical && !collapse) {
      return `fixed flex flex-col ${widthCollapsed ? widthCollapsed : 'w-20'} 
      ${width ? width : 'md:w-60'} h-full bg-light dark:bg-dark`;
    } else if (isVertical && collapse) {
      return `flex flex-col ${
        widthCollapsed ? widthCollapsed : 'w-20'
      } bg-light dark:bg-dark`;
    } else {
      return 'flex flex-row w-100 bg-light dark:bg-dark';
    }
  };

  const classes = {
    wrapper: handleIsVertical()
  };

  return (
    <nav className={classes.wrapper}>
      {brand && brand}
      <section>
        {routes &&
          routes.map(navItem => (
            <Link to={navItem.route}>
              <NavItem icon={navItem.icon} name={navItem.name} />
            </Link>
          ))}
      </section>
    </nav>
  );
};

export default VerticalNav;
