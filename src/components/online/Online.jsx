/* eslint-disable react/prop-types */
import "./online.css";
function Online({user}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={PF+user.profilePicture}
          alt={user.username}
        />
        <span className="rightbarOnline"> </span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

export default Online;
