import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/'>
          <span className='logo'>Bookgram</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon className='searchIcon' />
          <input placeholder='' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <Link to='/'>
            <span className='topbarLink'>Feed</span>
          </Link>
          <Link to='/profile/:username'>
            <span className='topbarLink'>My Books</span>
          </Link>

          <span className='topbarLink'>E-Books</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>5</span>
          </div>
        </div>
        <Link to='/profile/:username'>
          <img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
        </Link>
      </div>
    </div>
  );
}
