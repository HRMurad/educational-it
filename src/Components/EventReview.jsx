import React from "react";
import productViewImg from "../../src/assets/images/banner.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const EventReview = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="text-center" data-aos="zoom-in">
        <p className="lg:text-4xl md:text-2xl text-xl font-bold pt-8 text-amber-800 pb-6">
          Past Record on our event
        </p>
        <h5 className="text-center font-bold pb-2">
          "Our tech events have consistently wowed attendees <br /> and partners
          alike, establishing us as a go-to <br /> choice for immersive and{" "}
          <br />
          impactful tech experiences."
        </h5>
        <div className="stats shadow flex lg:flex-row md:flex-row flex-col lg:mx-16 md:mx-12 mx-6 mb-6">
          <div className="border flex items-center">
            <div className="stat flex gap-2 flex-col">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-title text-black text-xl">Total Event</div>
              <div className="stat-value text-secondary">10K</div>
              <div className="stat-desc font-bold">
                We are here for your care
              </div>
            </div>
          </div>
          {/*  */}
          <div className="stat">
            <div className="lg:w-[60%] md:w-[100%] w-[100%] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-[200px] rounded-full">
                    <img className="" src={productViewImg} />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="mt-4 mb-1 text-3xl font-bold text-gray-900 dark:text-black">
                Tech Event
              </h5>
              <span className="text-xl text-gray-500 dark:text-gray-400">
                Management
              </span>
            </div>
          </div>
          {/*  */}
          <div className="border border-t-2 flex items-center">
            <div className="stat flex gap-2 flex-col">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-title text-black text-xl">
                Client Satisfaction
              </div>
              <div className="stat-value text-secondary">100%</div>
              <div className="stat-desc font-bold">
                We are here for your care
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReview;
