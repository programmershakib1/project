import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const {user, handleSignOut} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    
    return (
        <div className="flex justify-between items-center my-10 mx-3 md:mx-0">
            <Link to="/" className="flex items-center">
                <img className="hidden md:block" src={logo} alt="" />
                <h2 className="text-3xl font-extrabold text-primary hidden md:block font-sora">Lingo Bingo</h2>
            </Link>
            <nav className="z-10">
                <div className="md:hidden absolute left-4 top-11" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <i className="fa-regular fa-circle-xmark text-primary text-4xl"></i> : <i className="fa-solid fa-bars text-primary text-4xl"></i>
                    }
                </div>
                <ul className={`flex flex-col md:flex-row md:gap-5 bg-white md:bg-none rounded-xl py-3 px-5 md:p-0 font-medium absolute md:absolute md:top-28 md:right-72 lg:static z-10 ${open ? 'left-4 top-24' : '-top-40'}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/startLearning">Start learning</NavLink>
                    <NavLink to="/tutorials">Tutorials</NavLink>
                    <NavLink to="/aboutUs">About Us</NavLink>
                    {
                        user ? <NavLink to="/myProfile">My Profile</NavLink> : ""
                    }
                </ul>
            </nav>
            <div className="flex gap-2 items-center">
                {
                    user ? <div className="font-sora flex items-center justify-center"><span className="hidden md:block pr-0 md:pr-1">welcome</span> {user.displayName?user.displayName:"user"} </div> : ""
                }
                {
                    user ? <div className="flex items-center">{user?.photoURL?<img className="w-12 rounded-full mr-3" src={user.photoURL} alt="" />:<i className="fa-solid fa-user text-primary text-4xl pl-1 pr-4"></i>}<i onClick={handleSignOut} className="fa-solid fa-right-from-bracket block text-primary md:hidden text-4xl"></i><button onClick={handleSignOut} className="hidden md:block text-xl font-bold bg-primary text-white py-2 px-4 rounded-md">Sign Out</button></div> : <div><Link to="/SignIn"><i className="fa-solid fa-user text-4xl text-primary block md:hidden"></i></Link> <Link to="/SignIn" className="text-xl font-bold bg-primary text-white py-2 px-6 rounded-md hidden md:block">Sign In</Link></div>
                }
            </div>
        </div>
    );
};

export default Navbar;