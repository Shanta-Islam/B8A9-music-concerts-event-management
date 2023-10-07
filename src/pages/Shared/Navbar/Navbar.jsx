import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] hover:text-[#FF444A] focus:text-[#FF444A] bg-transparent underline" : ""}>Home</NavLink></li>
        <li><NavLink to="/donation" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] hover:text-[#FF444A] focus:text-[#FF444A]  bg-transparent underline" : ""}>Donation</NavLink></li>
       {
        user ?
        <li onClick={handleSignOut}><NavLink>SignOut</NavLink></li>
        :
        <li><NavLink to="/login" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] hover:text-[#FF444A] focus:text-[#FF444A]  bg-transparent underline" : ""}>Login</NavLink></li>
       }
    </>
    return (
        <div className="navbar bg-base-100 fixed z-20 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-3xl font-bold">Festival</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="gap-10 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;