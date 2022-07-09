import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Stats from "../../components/stats/stats";
import BookList from "../../components/bookLists/bookList";
import Posts from "../../components/posts/posts";

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
                src={`${PF}post/8.jpeg`}
                alt=''
              />
              <img
                className='profileUserImg'
                src={`${PF}person/1.jpeg`}
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
