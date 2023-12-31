import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white hover:text-white focus:text-white bg-transparent underline" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white hover:text-white focus:text-white  bg-transparent underline" : ""}>About Us</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white hover:text-white focus:text-white bg-transparent underline" : ""}>Blog</NavLink></li>
        {
            user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><p>{user?.displayName ? user?.displayName : "User"}</p></li>
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleSignOut}><a>SignOut</a></li>
                    </ul>
                </div>
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