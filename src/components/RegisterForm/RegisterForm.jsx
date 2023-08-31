import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css"
import { register } from "redux/auth/actions";
//style

import TextField from '@mui/material/TextField';


export const RegisterForm = () => {
  const dispatch= useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.currentTarget;
  dispatch(
    register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
    );
    
    form.reset();
  
  };

  return (
    <div className={css.wrapper}>
      <div className={css.title}>Register Form</div>
      
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.field}>
        <TextField id="standard-basic"  variant="standard" color="secondary"  margin="normal" size="normal" focused type="text" name="name"  placeholder="Username"/>
      </label>
      <label className={css.field}>
       <TextField id="standard-basic"  variant="standard" color="secondary" margin="normal" focused type="email" name="email"  placeholder="Email" />
      </label>
        <label className={css.field}>
     <TextField id="standard-basic"  variant="standard"  color="secondary" margin="normal" focused type="password" name="password"  placeholder="Password" />
      </label>
          <button className={css.button_register} type="submit">Register</button>
    </form>
   </div>
  );
};