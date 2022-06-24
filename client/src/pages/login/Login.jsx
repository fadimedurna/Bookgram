import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className='loginDisplay'>
      <div className='loginPage'>
        <div className='loginInfo'>
          <img className='logo' src='assets/logo.png' alt='' />
          <span className='loginDesc'>
            Bookgram is a social media network that lets you share your books
            and ideas to all around the world
          </span>
          <div className='buttons'>
            <Link to='/register'>
              {" "}
              <button className='loginButton'>Register</button>
            </Link>
            <Link to='/'>
              <button className='moreButton'>Discover</button>
            </Link>
          </div>
        </div>
        <div className='loginForm' id='app'>
          <h1>Log In</h1>
          <form>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <div className='buttons'>
              <Link to='/'>
                <button className='loginButton'>Log-in</button>
              </Link>
              <button className='moreButton'>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
