import { HiTemplate } from 'react-icons/hi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { IoStorefrontSharp, IoBodySharp } from 'react-icons/io5';

const routes = [
  {
    name: 'Dashboard',
    route: '/',
    icon: <HiTemplate />
  },
  {
    name: 'Stores',
    route: '/stores',
    icon: <IoStorefrontSharp />
  },
  {
    name: 'Employees',
    route: '/employees',
    icon: <IoBodySharp />
  },
  {
    name: 'Products',
    route: '/products',
    icon: <HiTemplate />
  },
  {
    name: 'Finance',
    route: '/Finance',
    icon: <MdOutlineAttachMoney />
  }
];

export default routes;
