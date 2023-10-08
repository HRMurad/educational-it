import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DisplayDetailsService = ({ service }) => {
  const { image, description } = service;
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
          <div className="shadow-xl rounded-xl mb-4 bg-gradient-to-br from-blue-500 via-blue-700 to-green-500 lg:w-[440px] md:w-[350px] w-[300px] mx-auto my-6 py-4">
            <figure>
              <img
                className=" lg:w-[368px] w-[270px] lg:h-[300px] h-[215px] mx-auto rounded-lg"
                src={image}
              />
            </figure>
            <div className="lg:px-16 md:px-12 px-8 pt-6 text-lime-300 text-xl font-semibold">
              {description}
            </div>
            <div className="flex justify-center pt-4">
              <Link to="/productRegForm">
                <button className="btn btn-outline btn-warning">
                  Get Membership
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DisplayDetailsService;
