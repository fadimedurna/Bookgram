import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("posts/timeline/62b55aaa8a097929a7b3ab1a");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
