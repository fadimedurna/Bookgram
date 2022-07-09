import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function Post({ post }) {
  const [rank, setRank] = useState(post.rank.length);
  const [isRanked, setIsRanked] = useState(false);
  const [object, setObject] = useState(post.object);
  const [isObjected, setIsObjected] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  //rank
  const rankHandler = () => {
    setRank(isRanked ? rank - 1 : rank + 1);
    setIsRanked(!isRanked);
  };

  //object
  const objectHandler = () => {
    setObject(isObjected ? object - 1 : object + 1);
    setIsObjected(!isObjected);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={user.profilePicture || PF + "person/noAvatar.png"}
              alt='img'
            />
            <span className='postUserName'>{user.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={PF + post.img} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <span className='counter-up'>{rank}</span>
            <div className='arrow'>
              <ArrowUpwardIcon fontSize='large' onClick={rankHandler} />
            </div>
            <span className='counter-down'>{object}</span>
            <div className='arrow'>
              <ArrowDownwardIcon fontSize='large' onClick={objectHandler} />
            </div>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>
              {post?.comment}
              <CommentIcon fontSize='large' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
