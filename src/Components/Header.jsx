import { FaBookOpen } from "react-icons/fa";
import bannerImg from "../../src/assets/images/banner.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="pt-6">
        <div
          className="hero min-h-screen lg:mb-12 mb-6"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                HelloTechFixers
              </h1>
              <p className="mb-5">
                <span className="text-[20px]">Unlocking the Potential of</span>{" "}
                <br />
                Emerging Technologies
              </p>
              <div className="flex justify-center">
                <Link to="/portfolio" className="text-5xl ">
                  <button
                    className="
                btn
                btn-outline
                btn-warning
                text-3xl mr-2"
                  >
                    <FaBookOpen></FaBookOpen>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Header;
