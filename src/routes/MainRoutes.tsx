// THIRD-PARTY
import { lazy } from 'react';

// PROJECT IMPORTS
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

const Dashboard = Loadable(lazy(() => import('views/dashboard')));
const Profile = Loadable(lazy(() => import('views/pages/account')));
const Admin = Loadable(lazy(() => import('views/pages/admin')));
const Collection = Loadable(lazy(() => import('views/pages/collection')));

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/user',
      element: <Admin />
    },
    {
      path: '/collection',
      element: <Collection />
    },
    {
      path: '/setting',
      element: <Profile />
    }
  ]
};

export default MainRoutes;