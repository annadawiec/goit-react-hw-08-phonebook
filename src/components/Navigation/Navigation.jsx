import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOut } from "redux/auth/actions";



export const Navigation = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <header>
            <nav style={{display:"flex", gap: "10px"}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              <button onClick={handleLogout}>Log out</button>
            </nav>
        </header>
    )
}







