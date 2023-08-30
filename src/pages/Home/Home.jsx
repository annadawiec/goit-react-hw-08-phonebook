import { useSelector } from 'react-redux';
import css from "./Home.module.css"
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';


export const Home = () => {

  
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <section className={css.section}>
      <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
        <h2>{isLoggedIn ? <UserMenu /> : "You are Log out"}{' '}</h2>
        {!isLoggedIn && (
      <h3>Please <NavLink to="/register">Register</NavLink> or <NavLink to="/login">Log In</NavLink> to use your PhoneBook</h3> )}
    </div>
    </section>
 
  );
};
