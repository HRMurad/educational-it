import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import aboutPic from "../../src/assets/images/banner.jpg";
import { DiTechcrunch } from "react-icons/di";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-[330px] h-[330px] my-6 rounded-full shadow-lg"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              src={aboutPic}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-5xl font-medium text-gray-900 dark:text-white">
              Tech Event
            </h5>
            <span className="text-2xl text-gray-500 dark:text-gray-400">
              Management
            </span>
            <div>
              <div className="text-center p-10 bg-primary text-primary-content">
                <aside>
                  <button
                    className="
                btn
                btn-outline
                btn-warning
                text-5xl"
                  >
                    <DiTechcrunch></DiTechcrunch>
                  </button>
                  <p className="font-bold">
                    Tech Event Management.
                    <br />
                    Providing reliable tech since 2020
                  </p>

                  <div>
                    <h1 className="text-2xl font-semibold text-black pt-6">
                      Find Us On
                    </h1>
                    <nav className="flex justify-center gap-12 py-4 text-3xl">
                      <Link>
                        <button className="btn btn-outline btn-error text-2xl">
                          <FaFacebook></FaFacebook>
                        </button>
                      </Link>
                      <Link>
                        <button className="btn btn-outline btn-error text-2xl">
                          <FaTwitter></FaTwitter>
                        </button>
                      </Link>
                      <Link>
                        <button className="btn btn-outline btn-error text-2xl">
                          <FaLinkedin></FaLinkedin>
                        </button>
                      </Link>
                    </nav>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>{" "}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
