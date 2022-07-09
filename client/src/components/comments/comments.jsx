import "./comments.css";

export default function Profile() {
  return (
    <>
      <div className='container'>
        <nav>
          <div className='nav-title'>My Comments</div>
        </nav>

        <div class='commenterImage'>
          <img src='http://placekitten.com/50/50' alt='' />
        </div>
        <div class='commentText'>
          <p class=''>Hello this is a test comment.</p>{" "}
          <span class='date sub-text'>on March 5th, 2014</span>
        </div>

        <div class='commenterImage'>
          <img src='http://placekitten.com/50/50' alt='' />
        </div>
        <div class='commentText'>
          <p class=''>Hello this is a test comment.</p>{" "}
          <span class='date sub-text'>on March 5th, 2014</span>
        </div>

        <div class='commenterImage'>
          <img src='http://placekitten.com/50/50' alt='' />
        </div>
        <div class='commentText'>
          <p class=''>Hello this is a test comment.</p>{" "}
          <span class='date sub-text'>on March 5th, 2014</span>
        </div>
      </div>
    </>
  );
}
