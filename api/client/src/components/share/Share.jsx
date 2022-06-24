import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <input placeholder='Create Post' className='shareInput' />
          <div className='shareOptions'>
            <div className='shareOption'>
              <PermMediaIcon classname='shareIcon' />
              <span className='shareOptionText'>Photo/Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
