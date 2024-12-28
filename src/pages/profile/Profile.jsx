import "./profile.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  // const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="src/assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="src/assets/persons/1.webp"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ayush Ashtikar</h4>
              <span className="profileInfoDesc">Hey there ! {":)"}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="person"/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
