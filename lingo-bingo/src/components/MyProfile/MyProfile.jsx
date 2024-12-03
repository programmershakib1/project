import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, handleUserDelete } = useContext(AuthContext);
  
  return (
    <div className="flex flex-col items-center mx-5">
      <Helmet>
        <title>
          Lingo Bingo | Welcome{" "}
          {`${user?.displayName ? user.displayName : "User"}`}
        </title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold font-gummy mb-5 md:pt-10">
        Welcome {user?.displayName ? user.displayName : "User"}
      </h2>
      <div className="flex flex-col justify-center items-center">
        {user?.photoURL ? (
          <img
            className="w-36 rounded-xl animate__animated animate__zoomIn"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <p className="pb-5">image not found</p>
        )}
        <h2 className="pt-2 font-bold">
          {user?.displayName ? user.displayName : "User"}
        </h2>
        <p className="text-p font-semibold">{user?.email}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <button className="border rounded-full border-black py-1 px-6 font-semibold">
            <Link to="/updateProfile">Update Profile</Link>
          </button>
          <button className="border rounded-full border-black py-1 px-6 font-semibold">
            <Link to="/SignIn">Change Account</Link>
          </button>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="rounded-full py-1 px-6 font-semibold mt-3 bg-error text-white"
        >
          Delete Account
        </button>
      </div>
      <dialog id="my_modal_5" className="modal sm:modal-middle text-center">
        <div className="modal-box">
          <h3 className="font-bold text-3xl">{user.displayName}</h3>
          <h4 className="py-4 text-error text-lg font-bold">
            You are in danger zone now
          </h4>
          <p className="font-medium">
            If you really want to delete your account, click Delete Account
          </p>
          <div className="modal-action">
            <form className="mx-auto" method="dialog">
              <button
                onClick={handleUserDelete}
                className="py-2 px-6 bg-error text-white font-semibold"
              >
                Delete Account
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form className="mx-auto" method="dialog">
              <button className="underline font-semibold">Back</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
