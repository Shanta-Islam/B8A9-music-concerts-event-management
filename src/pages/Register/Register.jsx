import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(name);
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="py-20 mx-auto">
            <h2 className="text-2xl text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                </div>
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
                    <button className="btn">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account ? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;