import "./rightbar.css";
import { Users } from "../../randomData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/birthday-cake-emoji-512x511-x2hajl6r.png" alt="" />
          <span className="birthdayText"><b>Johan Johansson</b> and <b>3 other friends</b> celebrate their birthday today</span>
        </div>
        <img className="rightbarAd" src="./assets/ad-placeholder-sidebar.png" alt="" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) =>( 
            <Online key={u.id} user={u} /> 
          ))}
        </ul>
      </div>
    </div>
  );
}
