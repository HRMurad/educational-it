import { Link } from "react-router-dom";
import { DiTechcrunch } from "react-icons/di";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer items-center py-6 px-6 text-neutral-content bg-[#1D232A] flex flex-col lg:flex-row md:flex-row justify-between">
          <aside className="">
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-2">
              <button
                className="
                btn
                btn-outline
                btn-warning
                text-5xl"
              >
                <DiTechcrunch></DiTechcrunch>
              </button>

              <p className="lg:text-[16px] md:text-[12px] text-[10px]">
                Copyright © 2023 - All right reserved by Tech Event Private Ltd
              </p>
            </div>
          </aside>
          <nav className="">
            <div className="flex gap-2">
              <div className="form-control">
                <div className="flex lg:flex-row md:flex-row flex-col gap-1 justify-center items-center">
                  <textarea
                    placeholder="Write Your Feedback"
                    className="textarea textarea-bordered text-center  text-black text-xl"
                  ></textarea>

                  <button className="btn btn-outline btn-accent">Submit</button>
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
