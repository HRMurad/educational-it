import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { user, signInForm } = useAuth();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(user, email, password);

    signInForm(email, password)
      .then((res) => {
        console.log(res);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="bg-[#0F172A]">
          <div className="w-[30%] mx-auto bg-gray-200">
            <div className="text-center pt-4">
              <p className="text-black text-3xl font-bold">Login Form</p>
            </div>
            <div className="">
              <form onSubmit={loginHandler} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="text-center py-2">
                  <p>
                    Do not have an account?{" "}
                    <Link to="/register" className="text-green-800">
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
