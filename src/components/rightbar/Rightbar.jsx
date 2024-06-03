import "./rightbar.css"

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Fredrik Fredriksson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gustaf Gustafsson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Anders Andersson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Erik Eriksson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Olaf Olafsson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Per-Åke Persson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Peter Petersson</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/malecostume-512.webp" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jan Jansson</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
