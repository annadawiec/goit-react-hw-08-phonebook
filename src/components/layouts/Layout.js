import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Outlet />
    </div>
  );
};
