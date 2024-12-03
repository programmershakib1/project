import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Register = () => {
  const {
    handleSignUp,
    handleGoogleLogin,
    handleGithubLogin,
    setUser,
    setErrorMessage,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length > 20) {
      return toast.error("name length max 20");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return toast.error("Password must be 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password at least one lowercase letter");
    }
    e.target.reset();
    handleSignUp(email, password)
      .then((result) => {
        setUser(result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, createdAt };
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
        setUser({ displayName: name, photoURL: photo });
        fetch("https://lingobingo-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => {});
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
        toast.error(error.code);
      });
  };

  return (
    <div className="flex flex-col items-center lg:pt-10 md:pt-20">
      <Helmet>
        <title>Lingo Bingo | Sign Up</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-primary pb-5">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center"
      >
        <label>
          <span className="mr-[246px] font-semibold">Name</span>
        </label>
        <input
          name="name"
          type="text"
          placeholder="name"
          className="w-72 py-1 border border-black mt-1 mb-2 pl-3"
          required
        />
        <label>
          <span className="mr-[212px] font-semibold">Photo URL</span>
        </label>
        <input
          name="photo"
          type="text"
          placeholder="photo url"
          className="w-72 py-1 border border-black mt-1 mb-2 pl-3"
          required
        />
        <label>
          <span className="mr-[250px] font-semibold">Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="email"
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
        <button className="bg-primary py-1 px-6 text-white rounded-full font-bold mt-5">
          Sign Up
        </button>
      </form>
      <div>
        <p className="pt-2 text-center text-sm font-semibold">
          Already have an Account?
          <Link to="/SignIn" className="underline">
            {" "}
            Sign In
          </Link>
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            onClick={() => {
              handleGoogleLogin().then((result) => {
                setUser(result.user);
                const name = result?.user?.displayName;
                const email = result?.user?.email;
                const photo = result?.user?.photoURL;
                const createdAt = result?.user?.metadata?.creationTime;
                const userInfo = { name, email, photo, createdAt };
                fetch("https://lingobingo-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then(() => {});
                navigate("/");
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
                const name = result?.user?.displayName;
                const email = result?.user?.email;
                const photo = result?.user?.photoURL;
                const createdAt = result?.user?.metadata?.creationTime;
                const userInfo = { name, email, photo, createdAt };
                fetch("https://lingobingo-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then(() => {});
                navigate("/");
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

export default Register;
