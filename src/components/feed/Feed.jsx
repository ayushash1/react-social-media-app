/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./feed.css";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
// import { Posts } from "../../dummyData";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  // fetch posts from the server when the component mounts (ony once)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get("/api/posts/profile/" + username)   // that damn leading slash wasted my 2 hours 💀
          : await axios.get("/api/posts/timeline/676862908af58e3480ae3014");
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
