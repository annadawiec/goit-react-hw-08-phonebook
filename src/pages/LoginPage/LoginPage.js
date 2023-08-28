import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={css.section}>
      <LoginForm />
    </div>
  );
};
