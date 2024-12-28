/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}src/assets/gift.png`} alt="" />
          <span className="birthdayText">
            {" "}
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}src/assets/ad.png`} alt="ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/2.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/3.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/4.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/5.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/6.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}src/assets/persons/7.webp`}
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
