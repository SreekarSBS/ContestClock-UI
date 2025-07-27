import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button } from "./ui/button";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const handleSignIn = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            // Get user info
            const user = result.user;
            console.log("✅ User Signed In:", user);
            dispatch(addUser(user))
            // Optional: Get Google Access Token
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            console.log("Access Token:", token);
            
          } catch (error) {
            console.error("❌ Sign-in error:", error.message);
          }
    }

    return <div className="navbar  border-b border-b-blue-400 bg-black  shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Saved Contests</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Registered</a></li>
        </ul>
      </div>
      <a className="montserrat-logo btn btn-ghost text-2xl md:text-3xl  font-light">ContestCalendar</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Saved Contests</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Registered Contests</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <div onClick={handleSignIn} className="flex ml-auto m-6  flex-wrap items-center gap-2 md:flex-row">
        <Button> Sign In</Button>
       
      </div>
    </div>
  </div>
  
}

export default Header


