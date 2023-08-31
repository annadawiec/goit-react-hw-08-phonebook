import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/actions';
import { Button } from '@mui/material';





export const Navigation = () => {

    const { isLoggedIn } = useAuth();
  
    
const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logOut());
    };


    return (
        <nav className={css.nav}>
            <div>
            <NavLink className={css.link} to="/">
                Home
                </NavLink>
            </div>
           
            {isLoggedIn ? (
                <>
                    <NavLink className={css.link} to="/contacts">
                        Contacts
                    </NavLink>
                    <Button variant="contained" size="small" onClick={handleLogout}>Log out</Button>
                </>
            ) : (
                    <>
                         <div className={css.right}>
                    <NavLink className={css.link} to="/login">
                        Log in
                    </NavLink>
                    <NavLink className={css.link} to="/register">
                        Register
                            </NavLink>
                             </div>
                </>
                )}
               
        </nav>
    );
};