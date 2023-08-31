import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css"
import { logIn } from "redux/auth/actions";
import TextField from '@mui/material/TextField';


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
    <div className={css.wrapper}>
      <div className={css.title}>Login Form</div>
    <form className={css.login} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.field}>
        <TextField id="standard-basic"  variant="standard" color="secondary"  margin="normal" size="normal" focused type="email" name="email" placeholder="Email"/>
      </label>
      <label className={css.field}>
        <TextField id="standard-basic"  variant="standard" color="secondary"  margin="normal" size="normal" focused  type="password" placeholder="Password" name="password" pattern="^.{7,}$"
          title="Password must contain at least 7 characters."
          required />
      </label>
          <button className={css.button_login} type="submit">Log in</button>
      </form>
      </div>
  );
};