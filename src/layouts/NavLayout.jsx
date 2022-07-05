import { useState } from 'react';
import Nav from '../components/navbar/sidebar/VerticalNav';
import routes from '../routes/routes';
import { MdMenu } from 'react-icons/md';
import Dropdown from '../components/dropdown/Dropdown';
import logo from '../ARETE.png';

const NavLayout = () => {
  const [displayDropNav, setDisplayDropNav] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayDropNavHandler = () => {
    setDisplayDropNav(prevState => !prevState);
  };
  return (
    <>
      <div className="sticky top-0">
        <Nav
          className=" mx-4 md:m-0 py-4 md:p-4 border-b border-gray-800/40"
          brand={
            <div className=" flex content-center items-center justify-center align-center">
              <img
                src={logo}
                className="mr-2 hover:animate-spin"
                width="30px"
                height="30px"
                alt="logo"
              ></img>
              <h1 className="hidden md:inline text-1xl h-fit dark:text-font-dark2 text-font-light2">
                Simply POS
              </h1>
            </div>
          }
        ></Nav>
        <Nav
          className="inline md:hidden border-b border-gray-800/40"
          brand={
            <div className="p-4 dark:text-font-dark text-font-light">
              <div className="relative">
                <MdMenu
                  className="cursor-pointer"
                  onClick={displayDropNavHandler}
                  size="28px"
                />
                <Dropdown show={displayDropNav}></Dropdown>
              </div>
            </div>
          }
        ></Nav>
      </div>
      <div className="px-4">
        <div className="fixed hidden md:inline">
          <Nav routes={routes} isVertical collapse={isCollapsed}></Nav>
        </div>
      </div>
    </>
  );
};

export default NavLayout;
