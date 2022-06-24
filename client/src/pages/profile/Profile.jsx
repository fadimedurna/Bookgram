import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Stats from "../../components/stats/stats";
import BookList from "../../components/bookLists/bookList";
import Posts from "../../components/posts/posts";
import { Users } from "../../dummyData";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className='profile'>
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src='https://i.pinimg.com/originals/fc/df/12/fcdf12ab3c0e48d7908ffc9a78fe5c93.jpg'
                alt=''
              />
              <img
                className='profileUserImg'
                src={`${PF}person/7.jpeg`}
                alt=''
              />
            </div>

            <div className='profileInfo'>
              <Stats />
            </div>
          </div>
          <div className='profilePosts'>
            <div className='profileRightBottom'>
              <BookList />
            </div>
            <div className='profileRightBottom'>
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
