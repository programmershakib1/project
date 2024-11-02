import footer_logo from "../../assets/images/logo-footer.png";
const Footer = () => {
  return (
    <div style={{ background: "rgb(6, 9, 26)" }} className="text-white">
      <div className="container mx-auto px-5 pt-72">
        <div className="flex justify-center py-10">
          <img src={footer_logo} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-6">
          <div>
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="py-3 text-footer_text">
              We are a passionate team dedicated to <br /> providing the best
              services <br />
              our customers.
            </p>
          </div>
          <div className="flex flex-col px-5">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="list-disc text-footer_text py-3 pl-7 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Subscribe</h2>
            <p className="py-3 text-footer_text">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input
              className="w-7/12 rounded-l-lg py-3 pl-5 border-none mt-4"
              type="text"
              placeholder="Enter your email"
            />
            <button className="w-5/12 rounded-r-lg font-bold text-black bg-gradient-to-r from-yellow-300 to-purple-500 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-stone-700 pt-8"></div>
      <div className="text-center py-10">
        <p className="text-footer_text">@2024 Programmer Shakib All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
