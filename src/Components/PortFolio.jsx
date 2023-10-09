import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutPic from "../../src/assets/images/banner.jpg";
import Login from "../Pages/Login";
import { Link, NavLink } from "react-router-dom";

const PortFolio = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col">
          <img
            className="w-[330px] h-[330px] my-6 rounded-full shadow-lg"
            src={aboutPic}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-5xl font-medium text-gray-900 dark:text-white">
            Tech Event
          </h5>
          <span className="text-2xl text-gray-500 dark:text-gray-400 pb-6">
            Management
          </span>
        </div>

        <div className="bg-gray-100 min-h-screen pb-12">
          <div className="lg:w-[900px] md:w-[700px] w-[500px] mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">
              <span className="text-amber-800">Welcome</span> to our tech event
              management service center
            </h1>

            <div className="text-gray-700">
              <h2 className="text-2xl font-semibold mb-4">
                Terms and Conditions
              </h2>

              <section className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By using Portfolio Tech Event Management Service, you agree to
                  comply with and be bound by these terms and conditions.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  2. Privacy Policy
                </h3>
                <p>
                  Your use of our service is also governed by our Privacy
                  Policy, which you can review here.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  3. Event Registration
                </h3>
                <p>
                  To participate in events managed by Portfolio, you must be
                  required to register and provide accurate information.
                  <NavLink to="/login">
                    <button className="btn btn-outline btn-error">
                      Login First
                    </button>
                  </NavLink>
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2">4. Contact Us</h3>
                <p>
                  If you have any questions or concerns about our terms and
                  conditions, please contact us at{" "}
                  <a
                    href="mailto:support@portfolioevents.com"
                    className="text-blue-500"
                  >
                    techevent@management.com
                  </a>
                  .
                </p>
              </section>
            </div>
            <div className="flex justify-center p-2">
              <Link to="/">
                <button className="btn btn-outline btn-primary">Go Home</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PortFolio;
