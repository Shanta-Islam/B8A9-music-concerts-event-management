import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        signIn(email, password)
        .then(result=> {
            console.log(result.user)
            navigate(location?.state ? location.state : '/');
        })
        .then(error=> {
            console.error(error)
        })
    }
    return (
        <div className="py-20 mx-auto">
            <h2 className="text-2xl text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Do not have an account ? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;