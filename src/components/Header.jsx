import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { Button } from "./ui/button";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Header = () => {

    const user = useSelector((store) =>store.user)
    const dispatch = useDispatch()


    const handleSignIn = async() => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        
        const user = result.user;
        console.log(user);
        
      
      }).catch((error) => {
    
      
        const errorMessage = error.message;
       
        console.log(errorMessage);
        
      });
    }

    const handleSignOut = async() => {
      signOut(auth).then(() => {
    
        dispatch(removeUser())
      }).catch((error) => {
        // An error happened.
        console.log(error);
        
      });
      
    }

    console.log(user);
    
    

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
          <li><Link to = "/user/registered-contests">Registered</Link></li>
        </ul>
      </div>
     
      <Link to="/" className=" sm:flex sm:m-10 montserrat-logo btn btn-ghost text-2xl md:text-3xl  font-light">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 120 120">
<circle cx="60" cy="64" r="48" opacity=".35"></circle><circle cx="60" cy="60" r="48" fill="#ff1200"></circle><g><circle cx="60" cy="64" r="38" opacity=".35"></circle><circle cx="60" cy="60" r="38" fill="#a4e2f1"></circle><polygon points="75.022,86.67 56.056,65.53 56.056,37.999 64.056,37.999 64.056,62.468 80.978,81.328" opacity=".35"></polygon><polygon fill="#0037ff" points="75.022,83.67 56.056,62.53 56.056,31.999 64.056,31.999 64.056,59.468 80.978,78.328"></polygon><circle cx="60" cy="63" r="8" opacity=".35"></circle><circle cx="60" cy="60" r="8" fill="#0075ff"></circle></g>
</svg>
      <span className="hidden sm:block">ContestClock</span>
      <span className="block sm:hidden">CC</span>
      </Link>
   
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Saved Contests</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><Link to = "/contest">Event Tracker</Link></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><Link to = "/user/registered-contests">Registered Contests</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
   { !user? <div onClick={handleSignIn} className="flex ml-auto m-6  flex-wrap items-center gap-2 md:flex-row">
        <Button> Sign In</Button>
       
      </div>
      :
      <div className="dropdown dropdown-end m-6 flex">
        <span className="m-2 mx-4 text-cyan-400  text-lg xl:text-xl hidden sm:block ">{user?.displayName}</span>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} 
            rel="no referrer"
            />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleSignOut}>Logout</a></li>
      </ul>
    </div>
  
      }
    </div>
  </div>
  
}

export default Header


