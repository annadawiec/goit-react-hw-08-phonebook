import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

//added css line 9

export const RegisterPage = () => {
  return (
    <div className={css.section}>
      <RegisterForm />
    </div>
  );
};
