import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/actions';





export const Navigation = () => {

    const { isLoggedIn } = useAuth();
  
    
const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logOut());
    };


    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            {isLoggedIn ? (
                <>
                    <NavLink className={css.link} to="/contacts">
                        Contacts
                    </NavLink>
                    <button onClick={handleLogout}>Log out</button>
                </>
            ) : (
                <>
                    <NavLink className={css.link} to="/login">
                        Log in
                    </NavLink>
                    <NavLink className={css.link} to="/register">
                        Register
                    </NavLink>
                </>
            )}
        </nav>
    );
};