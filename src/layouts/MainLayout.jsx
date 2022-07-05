import { Routes, Route } from 'react-router';

import Dashboard from '../pages/dashboard/Dashboard';
import Stores from '../pages/stores/Stores';
import Finace from '../pages/finance/Finance.jsx';
import Employees from '../pages/employees/Employees';
import Products from '../pages/products/Products';

const MainLayout = () => {
  return (
    <div className="px-4">
      <div className="h-max overflow-y-auto m-0 md:ml-60">
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
