import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../Layouts/MainLayout";

const SingIn = () => {
    const {handleSignIn, errorMessage} = useContext(CountContext);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignIn(email, password);
        e.target.reset();
    }
    return (
        <div className="mx-5 md:mx-20 flex flex-col justify-center items-center gap-5 mt-20">
            <form onSubmit={handleSubmit} action="" className="flex flex-col items-center justify-center gap-2">
            <input name="email" type="email" className="border-2 border-black w-72"/>
            <input name="password" type="password" className="border-2 border-black w-72"/>
            <button type="submit" className="bg-gradient-to-b from-primary to-pink-500 py-1 px-8 rounded-full text-white font-bold text-lg">Sing In</button>
        </form>
        <div className="text-center">
            <p>Are you new?<Link to="/singUp" className="underline"> Sing Up</Link></p>
            {
                errorMessage?<p className="text-red-600 pt-3">{errorMessage}</p>:""
            }
        </div>
        </div>
    );
};

export default SingIn;