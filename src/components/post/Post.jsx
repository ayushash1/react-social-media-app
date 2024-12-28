/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./post.css";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`api/users/${post.userId}`);
        console.log(res.data);
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch User:", err);
      }
    }
    fetchUser();
  }, [])

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like -1: like+1 );
    setIsLiked(!isLiked)

  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture}
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postTex">{post?.desc}</span>
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}src/assets/like.png`} onClick={likeHandler} alt="like" />
            <img className="likeIcon" src={`${PF}src/assets/heart.png`} onClick={likeHandler} alt="heart" />
            <span className="postLikeCounter">{like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
