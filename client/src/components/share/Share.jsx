import "./share.css";
import { PermMedia } from "@material-ui/icons";

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <input placeholder='Create Post' className='shareInput' />
          <div className='shareOptions'>
            <div className='shareOption'>
              <PermMedia classname='shareIcon' />
              <span className='shareOptionText'>Photo/Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
