import { Routes, Route } from 'react-router';

import Dashboard from '../pages/dashboard/Dashboard';
import Stores from '../pages/stores/Stores';
import Finace from '../pages/finance/Finance.jsx';
import Employees from '../pages/employees/Employees';
import Products from '../pages/products/Products';
import Sidebar from '../components/navbar/sidebar/Sidebar';

import routes from '../routes/routes';

const MainLayout = () => {
  return (
    <div className="flex flex-row ">
      <div className="overflow-y-auto hidden fixed sticky top-[var(--navbar-height)] md:flex content-height">
        <Sidebar routes={routes} />
      </div>
      <div className="h-full w-full ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Finance" element={<Finace />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
