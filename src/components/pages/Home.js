import { useSelector } from 'react-redux';

export const Home = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      Home Page of the Phonegook App, {isLogged ? 'loged in' : 'log out'}{' '}
    </div>
  );
};
