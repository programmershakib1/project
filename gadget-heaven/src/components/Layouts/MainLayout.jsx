import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { getAllCart, getAllWish } from "../../utilities";
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const CountContext = createContext();

const MainLayout = () => {
  const { pathname } = useLocation();
  const [carts, setCarts] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleCount = () => {
    const allCart = getAllCart();
    setCarts(allCart);
    const allWish = getAllWish();
    setWishes(allWish);
  };

  useEffect(() => {
    const allCart = getAllCart();
    setCarts(allCart);
    const allWish = getAllWish();
    setWishes(allWish);
  }, []);

  const handleSignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        setUser(result.user);
        setErrorMessage("");
    })
    .catch(error => {
        setErrorMessage(error.message);
    })
  }
  const handleSignIn = (email, password) =>{
    setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setErrorMessage("");
      })
      .catch(error => {
        setErrorMessage(error.message);
    })
  }

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      setErrorMessage("")
    })
    .catch(error => {
        setErrorMessage(error.message);
    })
  };

  const handleGithubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
      setErrorMessage("");
    })
    .catch(error => {
        setErrorMessage(error.message);
    })
  };

  const handleLogout = () => {
    signOut(auth)
    .then((res) => setUser(res));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const countInfo = {
    handleCount,
    carts,
    wishes,
    handleSignUp,
    handleSignIn,
    handleGoogleLogin,
    handleGithubLogin,
    handleLogout,
    user,
    loading,
    errorMessage
  };

  return (
    <div>
      <CountContext.Provider value={countInfo}>
        <div
          className={`${
            pathname == "/" ||
            pathname == "/category/All%20Product" ||
            pathname == "/category/Laptops" ||
            pathname == "/category/Phones" ||
            pathname == "/category/Accessories" ||
            pathname == "/category/Watches" ||
            pathname == "/category/MacBook" ||
            pathname == "/category/Iphone"
              ? "bg-main md:pt-10 font-sora"
              : "pt-0 font-sora"
          }`}
        >
          <Toaster></Toaster>
          <div className="container mx-auto">
            <Navbar></Navbar>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white">
          <Footer></Footer>
        </div>
      </CountContext.Provider>
    </div>
  );
};

export default MainLayout;
