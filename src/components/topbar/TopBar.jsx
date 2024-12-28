import "./topbar.css";
import { Link } from "react-router";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from '@mui/icons-material/Notifications';

const TopBar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to={"/"} style={{textDecoration:"none"}}>
          <span className="logo">XSocial</span>
          </Link>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search for firends, posts or videos"
            />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="src/assets/Persons/1.webp" alt="" className="topbarImg" /> 
        </div>
      </div>
    </>
  );
};

export default TopBar;
