import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ForgetPassword = () => {
  const { emailValue } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    e.target.reset();
    if (!email) {
      toast.error("Please provide a valid mail");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success("Reset email sent, please check");
        window.location.href = "https://mail.google.com";
      });
    }
  };

  return (
    <div className="flex flex-col items-center lg:pt-10 md:pt-20 pt-10">
      <Helmet>
        <title>Lingo Bingo | Forget Password</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-primary pb-10">Forget Password</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center"
      >
        <label>
          <span className="mr-[252px] font-semibold">Email</span>
        </label>
        <input
          defaultValue={`${emailValue ? emailValue : ""}`}
          name="email"
          type="email"
          placeholder="email"
          className="w-72 py-1 border border-black mt-1 pl-3"
        />
        <button className="bg-primary py-1 px-6 text-white rounded-full font-bold mt-3">
          Reset Password
        </button>
      </form>
      <button className="mt-2 text-sm font-semibold">
        Back to
        <Link to="/SignIn" className="pl-1 underline">
          Sign In
        </Link>
      </button>
    </div>
  );
};

export default ForgetPassword;
