import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css"
import { logIn } from "redux/auth/actions";

export const LoginForm = () => {
  const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();
  
const form = e.currentTarget;
  dispatch(
    logIn({
    email: form.elements.email.value,
    password: form.elements.password.value,
  })
  );
  form.reset();
  };



  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">

      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" pattern="^.{7,}$"
          title="Password must contain at least 7 characters."
          required />
      </label>
          <button className={css.button_login} type="submit">Log in</button>
    </form>
  );
};