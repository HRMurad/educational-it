import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const Home = () => {
  const [value, setValue] = useState("");
  const detailsData = useLoaderData();
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="bg-[#D6F0F0]">
          <div className="lg:px-16 px-2">
            <Header></Header>
          </div>{" "}
          <div className="lg:px-16 md:px-8 px-16">
            <Services value={value} detailsData={detailsData}></Services>
          </div>
        </div>

        <div className="lg:px-16 px-2 bg-gray-400">
          <Review></Review>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
