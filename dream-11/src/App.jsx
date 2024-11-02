import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import PlayerSection from "./components/PlayerSection/PlayerSection";
import NewsLetterSection from "./components/NewsLetterSection/NewsLetterSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    status: "available",
  });
  const [coin, setCoin] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleActive = (status) => {
    if (status === "available") {
      setIsActive({
        active: true,
        status: "available",
      });
    } else {
      setIsActive({
        active: false,
        status: "about",
      });
    }
  };

  const handleCoin = () => {
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 3000,
    });
    const newCoin = coin + 6000000;
    setCoin(newCoin);
  };

  const handleDeletePrice = (id) => {
    const deletePrice = choosePlayer.find((p) => p?.id === id);
    setCoin(coin + deletePrice?.price);
  };

  const handleChoosePlayer = (player) => {
    if (coin > player?.price) {
      if (choosePlayer?.length > 5) {
        toast.error(
          "Six players have been added to your list. Can't Add anymore.",
          { position: "top-center", autoClose: 3000 }
        );
      } else {
        const isExist = choosePlayer.find((p) => p?.id === player?.id);
        if (isExist) {
          toast.error("Player already selected", {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.success(`Congrates !! ${player?.name} is now in your squad`, {
            position: "top-center",
            autoClose: 3000,
          });
          setCoin(coin - player.price);
          const newPlayer = [...choosePlayer, player];
          setChoosePlayer(newPlayer);
        }
      }
    } else {
      toast.error("Not enough money to buy this player Claim some Credit", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleDelete = (id) => {
    toast.warn("Player removed", { position: "top-right", autoClose: 3000 });
    handleDeletePrice(id);
    const remainingPlayer = choosePlayer.filter((p) => p?.id !== id);
    setChoosePlayer(remainingPlayer);
  };
  
  return (
    <div className="font-sora">
      <div className="bg-nav_bg bg-opacity-50 pt-8 pb-5 sticky z-10 top-0 backdrop-blur">
      <Header coin={coin}></Header>
      </div>
      <div className="container mx-auto">
        <Banner handleCoin={handleCoin}></Banner>
        <div className="relative mt-10">
          <PlayerSection
            handleActive={handleActive}
            isActive={isActive}
            handleChoosePlayer={handleChoosePlayer}
            choosePlayer={choosePlayer}
            handleDelete={handleDelete}
          ></PlayerSection>
          <div className="absolute -bottom-[550px] px-5 lg:px-0 md:px-0">
            <NewsLetterSection></NewsLetterSection>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
