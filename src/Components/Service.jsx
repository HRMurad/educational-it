import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { id, image, eventName, description, price, detailsButton } = data;

  return (
    <>
      <div>
        <div className="shadow-xl rounded-xl mb-4 bg-gradient-to-br from-blue-500 via-blue-700 to-green-500">
          <figure>
            <img
              className=" lg:w-[368px] w-[270px] lg:h-[200px] h-[215px] mx-auto rounded-lg lg:py-0 py-3"
              src={image}
            />
          </figure>
          <div className="">
            <h2 className="text-center text-white text-2xl font-bold p-4">
              {eventName}
            </h2>
            <div className="text-center px-6 font-semibold">
              {description.length > 70 ? (
                <p>{description.slice(0, 70)}...</p>
              ) : (
                <p>{description}</p>
              )}
            </div>
            <p className="text-center text-black w-12 h-12 flex justify-center items-center font-bold my-3 mx-auto rounded-[100%] bg-[#B8EAE7] hover:bg-black hover:text-[#B8EAE7] cursor-pointer">
              {price}
            </p>
            <div className="text-center pb-4">
              <Link to={`/detailService/${id}`} className="btn btn-primary">
                {detailsButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
