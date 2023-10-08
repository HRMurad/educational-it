import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";

const ProductBuyRegForm = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#D6F0F0] pt-6">
        <div className="text-center p-3 flex lg:w-[250px] w-[150px] mx-auto gap-3 items-center h-14 bg-[#82B440] rounded-t-box shadow-lg">
          <Marquee pauseOnHover={true} speed={10}>
            <Link className="text-white no-underline text-2xl font-bold">
              Membership Form
            </Link>
          </Marquee>
        </div>

        <div className="card lg:w-[700px] md:w-[500px] w-[400px] mx-auto shadow-2xl  bg-[#fffbeb]">
          <form className="m-12" action="process_purchase.php" method="post">
            <label htmlFor="name">Name: </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
            <br />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input
              type="phone"
              name="phone"
              placeholder="phone"
              className="input input-bordered"
              required
            />
            <br />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            <br />
            <br />
            <div className="flex items-center gap-2">
              <label htmlFor="address">Address:</label>
              <textarea className="textarea textarea-primary text-center"></textarea>
            </div>
            <br />
            <br />
            <label htmlFor="item_number">Item Number: </label>
            <input
              type="number"
              name="item"
              placeholder="items Number"
              className="input input-bordered"
              required
            />
            <br />
            <br />
            <label htmlFor="total_price">Total Price: </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
            <br />
            <br />
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-center text-2xl font-bold underline">
                <label>Pay With</label>
              </div>
              <br />
              <div className="text-center space-x-2">
                <input
                  type="radio"
                  id="bkash"
                  name="payment_method"
                  value="bkash"
                />
                <label htmlFor="bkash">bKash</label>
                <input
                  type="radio"
                  id="paypal"
                  name="payment_method"
                  value="paypal"
                />
                <label htmlFor="paypal">PayPal</label>
                <input
                  type="radio"
                  id="nogod"
                  name="payment_method"
                  value="nogod"
                />
                <label htmlFor="nogod">Nogod</label>
              </div>
            </div>

            <br />
            <br />
            <div className="text-center">
              <button className="btn btn-primary">
                <Link>Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductBuyRegForm;
