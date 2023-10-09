import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { user, signInForm, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(user, email, password);

    signInForm(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Information,correct it");
        setLoginError(true);
      });
  };
  // google handler login
  const googleHandler = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
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
          <div className="lg:w-[40%] md:w-[50%] w-[70%] mx-auto bg-gray-200">
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
                    type="text"
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
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                {/* login condition */}
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
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
                <div className=" py-2 lg:text-[16px] text-[12px] ">
                  <p>
                    Do not have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline dark:text-blue-500  font-semibold"
                    >
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
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Login;
