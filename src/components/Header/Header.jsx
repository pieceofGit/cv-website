import React from "react";
import "./Header.css";
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="name"> 
      <Link to="/" className="link">fjolnirthrastarson.com</Link>
    </div>
  )
}

export default Header;