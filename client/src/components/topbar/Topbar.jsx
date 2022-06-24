import "./topbar.css";
import { Search, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>Bookgram</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Feed</span>
          <span className='topbarLink'>My Books</span>
          <span className='topbarLink'>E-Books</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>5</span>
          </div>
        </div>
        <img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
      </div>
    </div>
  );
}
