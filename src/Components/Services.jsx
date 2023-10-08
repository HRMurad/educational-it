import Marquee from "react-fast-marquee";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = ({ value, detailsData }) => {
  const makingLowerCaseValue = value.toLowerCase();
  console.log(value);
  const filterDetailsData = detailsData.filter((data) => {
    if (!value) {
      return true;
    }
    return makingLowerCaseValue === data.category.toLowerCase();
  });
  return (
    <>
      <div>
        {filterDetailsData.length === 0 ? (
          <p className="text-center text-3xl font-semibold">
            <span className="text-red-500">oops!</span> No Found Data
          </p>
        ) : (
          <div>
            <div className="text-center p-3 flex lg:w-[250px] w-[150px] mx-auto gap-3 items-center h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-box shadow-lg">
              <Marquee pauseOnHover={true} speed={20}>
                <Link className="text-lime-300 no-underline text-1.5xl font-bold uppercase">
                  Tech Event Services
                </Link>
              </Marquee>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {filterDetailsData.map((data) => (
                <Service key={data.id} data={data}></Service>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
