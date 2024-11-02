import PropTypes from "prop-types";
import banner from "../../assets/images/bg-shadow.png";
import banner_logo from "../../assets/images/banner-main.png";
const Banner = ({ handleCoin }) => {
  return (
    <div className="px-5 lg:px-0 md:px-0">
      <div
        className="rounded-2xl mt-5 bg-zinc-900 bg-gradient-to-r from-cyan-500 to-blue-500"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-10 lg:py-20 md:py-20 text-center px-5">
          <img className="w-30" src={banner_logo} alt="" />
          <h1 className="text-4xl font-bold py-5 lg:py-10 md:py-10 text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h2 className="text-stone-400 text-xl font-medium pb-5 lg:pb-10 md:pb-10">
            Beyond Boundaries Beyond Limits
          </h2>
          <div className="w-48 border-2 border-primary p-1 rounded-xl">
            <button
              onClick={handleCoin}
              className="w-full bg-primary rounded-xl py-3 text-base font-semibold"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleCoin: PropTypes.func,
};

export default Banner;
