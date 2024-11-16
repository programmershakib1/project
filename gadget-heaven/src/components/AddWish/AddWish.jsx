import PropTypes from "prop-types";
import { useContext } from "react";
import { CountContext } from "../Layouts/MainLayout";

const AddWish = ({ wish, handleWishRemove }) => {
  const { handleCount } = useContext(CountContext);
  const { product_id, product_title, product_image, description, price } = wish;
  return (
    <div className="mt-[50px] flex flex-col md:flex-row justify-between border p-5 rounded-xl">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-60 md:h-36">
          <img
            className="w-full h-full rounded-xl"
            src={product_image}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product_title}</h2>
          <p className="py-3 text-p font-medium">{description}</p>
          <h4 className="font-semibold text-xl pb-3">Price:${price}</h4>
          <button className="py-2 px-6 bg-primary rounded-full text-white">Add to Cart</button>
        </div>
      </div>
      <div className="lg:pr-20">
        <button
          onClick={() => {
            handleWishRemove(product_id);
            handleCount();
          }}
        >
          <i className="fa-regular fa-circle-xmark text-4xl text-red-500 pt-10 md:pt-5"></i>
        </button>
      </div>
    </div>
  );
};

AddWish.propTypes = {
  wish: PropTypes.object,
  handleWishRemove: PropTypes.func,
};

export default AddWish;
