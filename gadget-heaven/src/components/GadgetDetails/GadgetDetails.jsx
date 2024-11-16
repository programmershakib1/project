import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart, addWish, getAllCart, getAllWish } from "../../utilities";
import { CountContext } from "../Layouts/MainLayout";
import Rating from "react-rating";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});
  const [isCart, setIsCart] = useState(false);
  const [isWish, setIsWish] = useState(false);

  const {handleCount } = useContext(CountContext);

  useEffect(() => {
    document.title = "Gadget Heaven | Details";
    const detailData = data.find((detail) => detail.product_id == parseInt(id));

    setGadget(detailData);

    const cartData = getAllCart();

    const isExist = cartData.find(
      (item) => item.product_id == gadget.product_id
    );

    if (isExist) {
      setIsCart(true);
    }

    const wishData = getAllWish();

    const isExists = wishData.find(
      (item) => item.product_id == gadget.product_id
    );

    if (isExists) {
      setIsWish(true);
    }
  }, [data, id, gadget.product_id]);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;

  const handleCart = (gadget) => {
    addCart(gadget);
    setIsCart(true);
  };

  const handleWish = (gadget) => {
    addWish(gadget);
    setIsWish(true);
  };

  return (
    <div className="relative">
      <div className="bg-primary pt-10 lg:mb-96 md:mb-[850px] mb-[700px]">
        <div className="lg:pb-64 md:pb-36 pb-20 flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center">
            Product Details
          </h2>
          <p className="text-white text-center py-5 px-10">
            EWelcome to the details page. Here you can see all the details of your desired gadget. Product name, product image, rating, availability, shorts description, <br /> etc and much more. To purchase the product, first click on add cart. After that, you can go to the dashboard <br /> and purchase the product. Click on the heart button to add the product to the wishlist.
          </p>
        </div>
      </div>
      <div className="shadow-md absolute lg:w-[1200px] lg:h-[580px] lg:-bottom-[350px] lg:left-40  md:w-[550px] md:h-[1000px] md:-bottom-[880px] md:right-28 -bottom-[730px] grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white p-8 rounded-3xl mx-5 md:mx-0">
        <div className="lg:col-span-2 flex justify-center items-center">
          <img
            className="md:h-96 rounded-2xl"
            src={product_image}
            alt=""
          />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-2xl lg:text-4xl font-bold">{product_title}</h2>
          <h2 className="font-medium lg:font-semibold lg:text-xl py-3 lg:py-5">
            Price ${price}
          </h2>
          <button className="border-2 border-green-300 bg-green-100 font-medium py-1 px-5 rounded-full">{`${
            availability ? "In Stock" : "Stock Out"
          }`}</button>
          <h2 className="lg:pt-5 pt-3 text-p font-medium">{description}</h2>
          <h2 className="text-xl font-bold pt-5 pb-3">Specification:</h2>
          <ol className="flex flex-col gap-2 text-p">
            {specification?.map((item, idx) => (
              <li key={idx}>
                {`${idx + 1}. `}
                {item}
              </li>
            ))}
          </ol>
          <h2>{availability}</h2>
          <h4 className="text-xl font-semibold pt-5">
            Rating
            <i className="fa-solid fa-star text-lg pl-1 pb-3 text-yellow-400"></i><br />
            <Rating
              initialRating={rating}
              className="text-yellow-400 mr-2"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating><span className="bg-main py-1 px-2 rounded-full text-lg">{rating}</span>
          </h4>
          <div className="flex items-center gap-5 pt-5">
            <button
              disabled={isCart}
              onClick={() => {
                handleCart(gadget);
                handleCount();
              }}
              className={`${
                isCart
                  ? "bg-white border py-2 px-8 rounded-full font-semibold"
                  : "bg-primary py-2 px-8 rounded-full text-white font-semibold"
              }`}
            >
              Add To Cart<i className="fa-solid fa-cart-shopping pl-2"></i>
            </button>
            <button
              disabled={isWish}
              onClick={() => {
                handleWish(gadget);
                handleCount();
              }}
              className={`${
                isWish
                  ? "border border-gray-300 rounded-full p-3"
                  : "border border-primary rounded-full p-3"
              }`}
            >
              <i className="fa-solid fa-heart flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
