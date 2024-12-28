/* eslint-disable no-unused-vars */
import "./feed.css";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
// import { Posts } from "../../dummyData";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // fetch posts from the server when the component mounts (ony once)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("api/posts/timeline/676862908af58e3480ae3014");
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    }
    fetchPosts();
  }, [])
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        { posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
