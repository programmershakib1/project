import PropTypes from "prop-types";
import { useContext } from "react";
import { CountContext } from "../Layouts/MainLayout";
import Rating from "react-rating";

const AddCart = ({ cart, handleCartRemove }) => {
  const {handleCount} = useContext(CountContext)
  const { product_id, product_title, product_image, description, price ,rating} = cart;
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-between border p-5 rounded-xl">
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="md:w-60 md:h-36">
          <img className="w-full h-full rounded-xl" src={product_image} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product_title}</h2>
          <p className="py-5 text-p font-medium">{description}</p>
          <h4 className="font-semibold text-xl pb-3">Price:${price}</h4>
          <Rating
              initialRating={rating}
              className="text-yellow-400 mr-2"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>{rating}
        </div>
      </div>
      <div className="lg:pr-20">
        <button onClick={() => {
          handleCartRemove(product_id)
          handleCount()
        }}>
          <i className="fa-regular fa-circle-xmark text-4xl text-red-500 pt-10 md:pt-5"></i>
        </button>
      </div>
    </div>
  );
};

AddCart.propTypes = {
  cart: PropTypes.object,
  handleCartRemove: PropTypes.func
}

export default AddCart;
