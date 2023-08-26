import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <header>
            <nav style={{display:"flex", gap: "10px"}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
        </header>
    )
}