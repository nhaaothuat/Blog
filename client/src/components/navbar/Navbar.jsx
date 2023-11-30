import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { AiOutlineLogin } from 'react-icons/ai';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  // const [err, setErr] = useState(null);
  // const navigate = useNavigate();
  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await logout(currentUser);
  //     navigate("/");
  //   } catch (err) {
  //     // setErr(err.response.data);
  //     alert("Error");
  //   }
  // };

  const navigate = useNavigate();
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
        // loginService.logout();
        navigate('/login');
    }
}




  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span>lamasocial</span> */}
          {/* <img
            src={h1}
            alt=""
          /> */}
          <span>Abbey</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      
      <div className="right">
      
      
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
        <button className="logout" onClick={handleLogout}><AiOutlineLogin /></button>  
      </div>
    </div>
  );
};

export default Navbar;
