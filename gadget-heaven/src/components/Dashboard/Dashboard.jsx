import { useContext, useEffect, useState } from "react";
import popup from "../../assets/group.png";
import {
  getAllCart,
  getAllWish,
  removeAll,
  removeCart,
  removeWish,
} from "../../utilities";
import AddCart from "../AddCart/AddCart";
import AddWish from "../AddWish/AddWish";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../Layouts/MainLayout";

const Dashboard = () => {
  const [carts, setCarts] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [total, setTotal] = useState(0);
  const [sorted, setSorted] = useState(false);
  const { handleCount } = useContext(CountContext);
  const [isActive, setIsActive] = useState({
    active: true,
    status: "cart",
  });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleModal = () => {
    const costArray = [...carts].map((array) => array.price);
    const sum = costArray.reduce((previous, current) => previous + current, 0);
    setTotal(sum);
    setCarts([]);
    removeAll();
  };

  const handleSort = () => {
    const sortByPrice = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sortByPrice);
    localStorage.setItem('cart',JSON.stringify(sortByPrice));
  };

  const costArray = [...carts].map((array) => array.price);

  const sum = costArray.reduce((previous, current) => previous + current, 0);

  useEffect(() => {
    document.title = "Gadget Heaven | Dashboard";
    const allCart = getAllCart();

    if (sorted) {
      const sortByPrice = [...allCart].sort((a, b) => b.price - a.price);
      setCarts(sortByPrice);
    } else {
      setCarts(allCart);
    }

    if (allCart.length > 0) {
      setDisable(false);
    }

    const allWish = getAllWish();
    setWishes(allWish);
  }, [sorted]);

  const handleCartRemove = (id) => {
    setSorted(true);
    removeCart(id);
    const allCart = getAllCart();
    setCarts(allCart);
  };

  const handleWishRemove = (id) => {
    removeWish(id);
    const allWish = getAllWish();
    setWishes(allWish);
  };

  const handleActive = (status) => {
    if (status === "cart") {
      setIsActive({
        active: true,
        status: "cart",
      });
    } else {
      setIsActive({
        active: false,
        status: "wish",
      });
    }
  };

  return (
    <div>
      <div className="bg-primary py-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center">
            Dashboard
          </h2>
          <p className="text-white text-center py-5 px-10">
            Welcome to Dashboard. Here you can see your carts and wish gadgets.
            By default these are the cart items that are showing. Click on the{" "}
            <br /> wishlist to see the wish items. Also here you will get many
            more options with purchase. <br /> If you dont like an item, you can
            delete it by clicking the cross button.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => handleActive("cart")}
              className={
                isActive.active
                  ? "w-40 border bg-white text-primary py-2 rounded-full font-bold"
                  : "bg-none border rounded-full text-white font-bold w-40"
              }
            >
              Cart
            </button>
            <button
              onClick={() => handleActive("wish")}
              className={
                isActive.active
                  ? "w-40 bg-none border rounded-full text-white font-bold"
                  : "border bg-white py-2 px-6 rounded-full font-bold text-primary"
              }
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {isActive.active ? (
        <div className="md:mx-20 mx-10">
          <div className="pt-10 flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-2xl font-bold pt-1 text-center md:text-left">
                Cart
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h2 className="text-2xl font-bold mr-4">Total cost: {sum}</h2>
              <button
                onClick={handleSort}
                className="text-primary font-bold border border-primary py-2 px-6 lg:px-8 rounded-full"
              >
                Sort by Price <i className="fa-solid fa-sort pl-2"></i>
              </button>
              <button
                disabled={disable}
                onClick={() => {
                  window.my_modal_1.showModal();
                  handleModal();
                  handleCount();
                }}
                className="bg-gradient-to-b from-primary to-pink-500 py-2 px-8 rounded-full text-white"
              >
                Purchase
              </button>
            </div>
          </div>
          {carts.map((cart, idx) => (
            <AddCart
              key={idx}
              cart={cart}
              handleCartRemove={handleCartRemove}
            ></AddCart>
          ))}
        </div>
      ) : (
        <div className="md:mx-20 mx-10">
          <h2 className="text-2xl font-bold pt-10">Wish</h2>
          {wishes.map((wish, idx) => (
            <AddWish
              key={idx}
              wish={wish}
              handleWishRemove={handleWishRemove}
            ></AddWish>
          ))}
        </div>
      )}
      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex justify-center py-5">
            <img src={popup} alt="" />
          </div>
          <h2 className="text-center text-3xl font-bold">
            Payment Successfully
          </h2>
          <div className="border my-5 mx-5"></div>
          <p className="text-center">Thanks for purchasing.</p>
          <p className="text-center pt-2">Total: {total}</p>
          <div className="modal-action md:pl-[75px] pb-3">
            <form className="w-full" method="dialog">
              <button
                onClick={handleNavigate}
                className="btn w-80 rounded-full text-xl font-bold"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
