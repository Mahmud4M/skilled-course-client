import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // Sign Out
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    console.log(user)

    return (
        <>
            <div className="navbar bg-base-100 mt-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold font-roboto"><span className="text-orange-400">Be</span>SkilleD</a>
                </div>
                <div className="flex items-center gap-5 font-roboto mr-5 lg:mr-10">
                    {
                        user ?
                            <>
                                <Link to='/'><button className="text-lg hover:bg-gray-300 p-2 hover:duration-1000 font-roboto rounded-lg">Home</button></Link>
                                <Link><button onClick={handleSignOut} className="text-lg hover:bg-gray-300 p-2 hover:duration-1000 font-roboto rounded-lg">SignOut</button></Link>
                            </>
                            :
                            <>
                                <Link to='/login'><button className="text-lg hover:bg-gray-300 p-2 hover:duration-1000 font-roboto rounded-lg">SignIn</button></Link>
                                <Link to='/signup'><button className="text-lg hover:bg-gray-300 p-2 hover:duration-1000 font-roboto rounded-lg">SignUp</button></Link>
                            </>
                    }
                </div>
                <div className="flex-none">
                    {
                        user && (
                            <div className="dropdown dropdown-end z-50">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div referrerPolicy='no-referrer' title={user?.displayName} className="w-10 rounded-full">
                                        <img alt="User Profile Photo" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-roboto">
                                    {/* <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li> */}
                                    <li><Link to='/addjob'>Add Job</Link></li>
                                    <li><Link to='/postedJob'>My Posted Jobs</Link></li>
                                    <li><Link to='/myBid'>My Bids</Link></li>
                                    <li><Link to='/bidReq'>Bids Requests</Link></li>
                                    <li><button onClick={handleSignOut} className="w-[4rem] mx-auto text-red-500 text-center">SignOut</button></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;