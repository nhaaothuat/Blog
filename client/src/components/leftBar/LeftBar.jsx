import "./leftBar.scss";
import Friends from "../../assets/1.png";
// import Groups from "../../assets/2.png";
// import Market from "../../assets/3.png";
// import Watch from "../../assets/4.png";
// import Memories from "../../assets/5.png";
// import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
// import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
// import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import { useNavigate } from 'react-router-dom';
const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickMenu = (path) => {
    navigate(path);
  }
  return (
    <div className="leftBar">
      {/* <Routes > */}
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
            {/* <div className="details"> 
              <Link
                to={`/profile/${currentUser.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{currentUser.name}</span>
              </Link>
              
            </div> */}
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          {/* <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div> */}
        </div>
        <hr />
        <div className="menu">
          <span >Entertainment</span>
          {/* <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div> */}
          <div className="item">
            <img src={Gaming} alt="" />
            <span onClick={() => onClickMenu('/tictactoe')}>
            {/* <Route path="/game" Component={TicTacToe} /> */}
            Gaming
            </span>
            
          </div>
          {/* <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div> */}
          <div className="item">
            <img src={Videos} alt="" />
            <span onClick={() => onClickMenu('/music')}>Music</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span onClick={() => onClickMenu('/courses')}>
              Courses
              </span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          {/* <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div> */}
          <div className="item">
            <img src={Tutorials} alt="" />
            <span onClick={() => onClickMenu('/qrcode')}>QRCode</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span onClick={() => onClickMenu('/date')}>Date</span>
          </div>
        </div>
      </div>
      {/* </Routes> */}
    </div>
  );
};

export default LeftBar;
