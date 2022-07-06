import { useEffect } from 'react';
import routes from '../routes/routes';
import logo from '../ARETE.png';
import NavDropdown from '../components/dropdowns/NavDropdown';
import UserDropdown from '../components/dropdowns/UserDropdown';
import { Link } from 'react-router-dom';
import Sidebar from '../components/navbar/sidebar/Sidebar';
import Navbar from '../components/navbar/top/Navbar';

const NavLayout = ({ ref }) => {
  return (
    <>
      <Navbar
        ref={ref}
        className="md:m-0 p-4 md:p-4 border-b border-gray-800/40"
        brand={
          <div className=" flex content-center items-center justify-center align-center">
            <Link to="/">
              <div className="flex flex-row items-center">
                <img
                  src={logo}
                  className="mr-2 md:hover:animate-spin"
                  width="30px"
                  height="30px"
                  alt="logo"
                ></img>
                <h1 className="hidden md:inline text-1xl h-fit dark:text-font-dark2 text-font-light2">
                  Simply POS
                </h1>
              </div>
            </Link>
          </div>
        }
      >
        <div className="flex flex-row items-center dark:text-font-dark text-font-light">
          <div className="mr-3 md:mr-0">
            <UserDropdown routes={routes} />
          </div>
          <div className="inline md:hidden">
            <NavDropdown routes={routes} />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavLayout;
