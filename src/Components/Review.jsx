import Marquee from "react-fast-marquee";
import usa1 from "../../src/assets/images/usa1.jpg";
import usa2 from "../../src/assets/images/usa2.jpg";
import usa3 from "../../src/assets/images/usa3.jpg";
import usa4 from "../../src/assets/images/usa4.jpg";
import usa5 from "../../src/assets/images/usa5.jpg";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <>
      <div className="">
        <div className="text-center p-3 flex  mx-auto gap-3 items-center h-14 bg-transparent shadow-sm ">
          <Marquee pauseOnHover={true} speed={10}>
            <Link className="text-[#c026d3] no-underline text-3xl font-bold ">
              Client Review on our Event
            </Link>
          </Marquee>
        </div>
        <div className="flex justify-center pb-12">
          <div className="carousel carousel-center w-[300px] pb-2 bg-neutral rounded-box">
            <div className="carousel-item flex flex-col">
              <div>
                <img src={usa1} className="rounded-box w-full h-[200px]" />
              </div>
              <div>
                <h1 className="text-white px-2  h-[230px] w-[200px] mx-auto bg-[#334155] my-2 text-left rounded-lg">
                  <Link className="flex justify-center btn btn-warning text-xl font-semibold">
                    WonderFull!
                  </Link>
                  <br />
                  "Attending this tech event was a game-changer for me; I've
                  never experienced such insightful discussions and valuable
                  networking opportunities as a client."
                </h1>
              </div>
            </div>

            <div className="carousel-item flex flex-col">
              <div>
                <img src={usa2} className="rounded-box w-full h-[200px]" />
              </div>
              <div>
                <h1 className="text-white px-2 h-[230px] w-[200px] mx-auto bg-[#334155] my-2 text-left rounded-lg">
                  <Link className="flex justify-center btn btn-warning text-[18px] font-semibold">
                    Spectacular service!
                  </Link>
                  <br />
                  "As a tech enthusiast and client, this event exceeded my
                  expectations, showcasing the latest and greatest innovations
                  in the industry."
                </h1>
              </div>
            </div>
            <div className="carousel-item flex flex-col">
              <div>
                <img src={usa3} className="rounded-box w-full h-[200px]" />
              </div>
              <div>
                <h1 className="text-white px-2 h-[230px] w-[200px] mx-auto bg-[#334155] my-2 text-left rounded-lg">
                  <Link className="flex justify-center btn btn-warning text-[18px] font-semibold">
                    Impressive service!
                  </Link>
                  <br />
                  "I was truly impressed by the caliber of speakers and the
                  relevance of the topics discussed at this tech event, as a
                  satisfied client."
                </h1>
              </div>
            </div>
            <div className="carousel-item flex flex-col">
              <div>
                <img src={usa4} className="rounded-box w-full h-[200px]" />
              </div>
              <div>
                <h1 className="text-white px-2 h-[230px] w-[200px] mx-auto bg-[#334155] my-2 text-left rounded-lg">
                  <Link className="flex justify-center btn btn-warning text-[18px] font-semibold">
                    Exceptional experience!
                  </Link>
                  <br />
                  "Year after year, this tech conference as a client, continues
                  to set the gold standard in delivering exceptional value and
                  insights."
                </h1>
              </div>
            </div>
            <div className="carousel-item flex flex-col">
              <div>
                <img src={usa5} className="rounded-box w-full h-[200px]" />
              </div>
              <div>
                <h1 className="text-white px-2 h-[230px] w-[200px] mx-auto bg-[#334155] my-2 text-left rounded-lg">
                  <Link className="flex justify-center btn btn-warning text-[18px] font-semibold">
                    Incredible service!
                  </Link>
                  <br />
                  "This event is a must-attend for clients like me who are
                  dedicated to staying at the forefront of the tech industry;
                  it's simply unparalleled."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
