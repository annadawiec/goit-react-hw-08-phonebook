import { useSelector } from 'react-redux';
import css from "./Home.module.css"

export const Home = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);

 return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to your PhoneBook.</h1>
        <div className={css.text}>
          <h2>You are {isLogged ? 'logged in' : 'logged out'}</h2>
          <h3>Please <button className={css.button_add}>Register</button> or <button className={css.button_add}>Log in</button> to use your PhoneBook</h3>
        </div>
      </div>
    </section>
  );
};

