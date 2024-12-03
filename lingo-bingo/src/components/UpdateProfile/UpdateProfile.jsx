import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
const UpdateProfile = () => {
  const { setUser, setErrorMessage } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    if (name.length > 20) {
      return toast.error("name length max 20");
    }
    const photo = e.target.photo.value;
    e.target.reset();
    updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
      .then(() => {
        const email = auth.currentUser?.email;

        const updatedUser = { email, name, photo };
        fetch("https://lingobingo-server.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then(() => {});
        toast.success("Profile update successful");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    setUser({ displayName: name, photoURL: photo });
    navigate("/myProfile");
  };

  return (
    <div>
      <Helmet>
        <title>Lingo Bingo | Update Profile</title>
      </Helmet>
      <div className="flex flex-col items-center lg:pt-10 md:pt-20">
        <h2 className="text-3xl font-bold text-primary pb-5">Update Profile</h2>
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
            className="w-72 py-1 border border-black mt-1 pl-3"
            required
          />
          <button className="bg-primary py-1 px-6 text-white rounded-full font-bold mt-5">
            Update
          </button>
          <button className="mt-2 text-sm font-semibold">
            Back to{" "}
            <Link to="/myProfile" className="underline">
              My Profile
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
