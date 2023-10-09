import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Register = () => {
  const { user, createUser, loginWithGoogle, updateUrlName } = useAuth();
  //
  const [regErr, setRegErr] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  //
  const registerHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(user, email, password);
    setRegErr("");
    setRegSuccess("");

    //
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email_pattern.test(email)) {
      setRegErr("Please enter a valid email");
      toast.error("Please enter a valid email");
      return;
    }

    //
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (password.length < 6) {
      setRegErr("Password should be at least 6 characters");
      toast.error("Password should be at least 6 characters");
      return;
    } else if (!passwordPattern.test(password)) {
      setRegErr(
        "Password should have at least one capital letter and one Special character"
      );
      toast.error(
        "Password should have at least one capital letter and one Special character"
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateUrlName(name, photoUrl);
        console.log(res);
        setRegSuccess("Your Registration is success");
        toast.success("Registration successful");
      })
      .catch((err) => {
        console.log(err);
        setRegErr(err.message);
        toast.error(err.message);
      });
  };

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
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="photoUrl"
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
              {/*  */}
              <div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
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

              <div className="text-center py-2 lg:text-[16px] text-[12px]">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline dark:text-blue-500  font-semibold"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
