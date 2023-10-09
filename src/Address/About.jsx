import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import aboutPic from "../../src/assets/images/banner.jpg";
import { DiTechcrunch } from "react-icons/di";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-[330px] h-[330px] my-6 rounded-full shadow-lg"
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
                    Tech Event Management <br />
                    Providing reliable tech since 2020
                  </p>

                  <div>
                    <h1 className="text-2xl font-semibold text-black pt-6">
                      Find Us On
                    </h1>
                    {/* about us */}
                    <div className=" mx-auto p-4">
                      <h1 className="text-3xl font-semibold mb-4">
                        About Our Event
                      </h1>

                      <section className="bg-white p-4 rounded-lg shadow text-black">
                        <h2 className="text-xl font-semibold mb-2">About Us</h2>
                        <p>
                          Our event is a cutting-edge tech event company
                          dedicated to delivering unparalleled experiences in
                          the world of technology and innovation. With a passion
                          for fostering connections, inspiring innovation, and
                          celebrating the latest advancements, we are your go-to
                          partner for exceptional tech events.
                        </p>
                      </section>

                      <section className="bg-white text-black p-4 mt-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Services</h2>
                        <ul className="text-left">
                          <li className="list-disc ml-4">
                            Event Planning: We meticulously plan and execute
                            tech-focused events that leave a lasting impression.
                          </li>
                          <li className="list-disc ml-4">
                            Speaker Engagements: Our network includes top
                            industry experts and thought leaders to elevate your
                            event.
                          </li>
                          <li className="list-disc ml-4">
                            Experiential Tech Demos: Showcase the latest tech
                            products and innovations to captivate your audience.
                          </li>
                          <li className="list-disc ml-4">
                            Networking Opportunities: Connect with industry
                            peers, startups, and investors at our exclusive
                            gatherings.
                          </li>
                          <li className="list-disc ml-4">
                            Customized Solutions: Tailor-made tech events to
                            suit your unique goals and vision.
                          </li>
                        </ul>
                      </section>

                      <section className="bg-white text-black p-4 mt-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Value</h2>
                        <p className="text-left">
                          At our tech event, we bring value through expertise in
                          tech event management, seamless logistics and
                          execution, access to a vast network of tech
                          influencers, unforgettable attendee experiences, and
                          measurable results for your brand.
                        </p>
                      </section>

                      <section className="bg-white text-black p-4 mt-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Products</h2>
                        <ul className="text-left">
                          <li className="list-disc ml-4">
                            Tech Summit: A flagship event featuring keynotes,
                            panels, and networking.
                          </li>
                          <li className="list-disc ml-4">
                            Tech Expo: Showcase your brand and products to a
                            tech-savvy audience.
                          </li>
                          <li className="list-disc ml-4">
                            Webinars and Workshops: In-depth sessions on
                            emerging tech trends.
                          </li>
                          <li className="list-disc ml-4">
                            Virtual Events: Connect globally through our
                            immersive online experiences.
                          </li>
                        </ul>
                      </section>

                      <section className="bg-white text-black p-4 mt-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Future</h2>
                        <p className="text-left">
                          We are committed to shaping the future of tech events
                          by embracing emerging technologies, expanding our
                          global reach, strengthening partnerships, creating
                          more engaging and interactive experiences, and
                          continuously innovating to exceed your expectations.
                        </p>
                      </section>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
