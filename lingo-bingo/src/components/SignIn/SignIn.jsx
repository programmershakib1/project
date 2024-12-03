import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const SignIn = () => {
  const {
    handleSignIn,
    handleGoogleLogin,
    handleGithubLogin,
    setUser,
    setErrorMessage,
    setEmailValue,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    handleSignIn(email, password)
      .then((result) => {
        setUser(result.user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch("https://lingobingo-server.vercel.app/users/login", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then(() => {});
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
        toast.error(error.code);
      });
  };

  const handleEmail = () => {
    setEmailValue("");
    const email = emailRef.current.value;
    if (!email.includes("@") && !email == "") {
      return toast.error("Please provide a valid mail");
    } else {
      setEmailValue(email);
    }
  };

  return (
    <div className="flex flex-col items-center lg:pt-10 md:pt-20">
      <Helmet>
        <title>Lingo Bingo | Sign In</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-primary pb-5">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center"
      >
        <label>
          <span className="mr-[250px] font-semibold">Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="email"
          ref={emailRef}
          className="w-72 py-1 border border-black mt-1 mb-2 pl-3"
          required
        />
        <label>
          <span className="mr-[222px] font-semibold">Password</span>
        </label>
        <input
          name="password"
          type="password"
          placeholder="password"
          className="w-72 py-1 border border-black mt-1 pl-3"
          required
        />
        <button>
          <Link
            onClick={handleEmail}
            to="/forgetPassword"
            className="text-xs py-2 hover:underline"
          >
            Forget password?
          </Link>
        </button>
        <button className="bg-primary py-1 px-6 text-white rounded-full font-bold">
          Sign In
        </button>
      </form>
      <div>
        <p className="pt-2 text-center text-sm font-semibold">
          Don&apos;t have an Account?
          <Link to="/SignUp" className="underline">
            {" "}
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            onClick={() => {
              handleGoogleLogin().then((result) => {
                setUser(result.user);
                const email = result?.user?.email;
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                fetch("https://lingobingo-server.vercel.app/users/login", {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(loginInfo),
                })
                  .then((res) => res.json())
                  .then(() => {});
                navigate(location?.state ? location.state : "/");
              });
            }}
            className="bg-primary py-2 px-6 text-white rounded-full font-bold mt-5"
          >
            <i className="fa-brands fa-google text-black pr-2"></i>Continue with
            Google
          </button>
          <button
            onClick={() => {
              handleGithubLogin().then((result) => {
                setUser(result.user);
                const email = result?.user?.email;
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                fetch("https://lingobingo-server.vercel.app/users/login", {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(loginInfo),
                })
                  .then((res) => res.json())
                  .then(() => {});
                navigate(location?.state ? location.state : "/");
              });
            }}
            className="bg-primary py-2 px-6 text-white rounded-full font-bold md:mt-5"
          >
            <i className="fa-brands fa-github text-black pr-2"></i>Continue with
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
