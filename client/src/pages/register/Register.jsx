import "./register.css";
import {  Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="login">
      <div className="loginPage">
        <div className="loginInfo">
          <img className="logo" src="assets/logo.png" />
          <span className="loginDesc">
            Bookgram is a social media network that lets you share your books and ideas to all around the world
          </span>
          <div className="buttons">
          <Link to="/login">
          <button className="loginButton">Log In</button>
          </Link>
            <button className="moreButton">Discover</button>
          </div>
        
        </div>
        <div className="loginForm" id="app">
        <h1>Create Account</h1>
  <form>
    <input type="text" name="name" placeholder="Your Name"/>
    <input type="text" name="login" placeholder="Username"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="email" name="email" placeholder="Email"/>
    <input type="text" name="phone" placeholder="Phone"/>
    <input type="text" name="country" placeholder="Country"/>
    <div className="buttons">
      <Link to="/login">

            <button className="loginButton">Create</button>
            </Link>
            <button className="moreButton">Reset</button>
          </div>
  </form>
        </div>
      </div>
    </div>
  );
}
