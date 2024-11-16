import { useContext } from "react";
import { CountContext } from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const SingUp = () => {
  const { handleSignUp, handleGoogleLogin, handleGithubLogin, errorMessage } =
    useContext(CountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    handleSignUp(email, password);
    e.target.reset();
  };
  return (
    <div className="mx-5 md:mx-20 flex flex-col justify-center items-center gap-5 mt-20">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center justify-center gap-2 mb-10"
      >
        <input name="email" type="email" className="border-2 border-black w-72" />
        <input
          name="password"
          type="password"
          className="border-2 border-black w-72"
        />
        <button
          type="submit"
          className="border border-black py-1 px-8 rounded-full font-bold text-lg"
        >
          Sing Up
        </button>
      </form>
      <button
        className="bg-gradient-to-b from-primary to-pink-500 py-2 px-8 rounded-full text-white font-bold text-lg"
        onClick={handleGoogleLogin}
      >
        Google<i className="fa-brands fa-google pl-5"></i>
      </button>
      <button
        className="bg-gradient-to-b from-primary to-pink-500 py-2 px-8 rounded-full text-white font-bold text-lg"
        onClick={handleGithubLogin}
      >
        Github<i className="fa-brands fa-github pl-5"></i>
      </button>
      <button
        className="bg-gradient-to-b from-primary to-pink-500 py-2 px-8 rounded-full text-white font-bold text-lg"
        onClick={handleGoogleLogin}
      >
        Twitter<i className="fa-brands fa-twitter pl-5"></i>
      </button>
      <div className="text-center">
        <p>
        Already have an account?<Link to="/singIn" className="underline"> Sing In</Link>
        </p>
        {
            errorMessage?<p className="text-red-600 pt-3">{errorMessage}</p>:""
        }
      </div>
    </div>
  );
};

export default SingUp;
