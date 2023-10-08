import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { user, createUser, loginWithGoogle } = useAuth();
  const registerHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(user, email, password);

    createUser(email, password).then().catch();
  };

  const googleHandler = () => {
    loginWithGoogle().then().catch();
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="bg-[#0F172A]">
          <div className="w-[30%] mx-auto bg-gray-200">
            <div className="text-center pt-4">
              <p className="text-black text-3xl font-bold">Registration Form</p>
            </div>
            <form onSubmit={registerHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              {/*sign in with google */}
              <div>
                <p className="text-center text-2xl mb-4">Sign up with</p>
                <Link
                  onClick={googleHandler}
                  className="flex justify-center p-4 border w-12 h-12 rounded-[50%] mx-auto bg-black text-white hover:bg-[#570DF8] hover:text-white"
                >
                  <FaGoogle></FaGoogle>
                </Link>
              </div>

              <div className="text-center py-2">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-green-800">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Register;
