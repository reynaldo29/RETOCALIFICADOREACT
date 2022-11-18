import logo from "../../assets/images/logo.png";

import "./navbar.css";


export const Navbar = () => {
  return (
    <div className="bartopwrapper">
      <div className="bartop">
        <img className="im" src={logo} width="300" alt="logo nombre"></img>
      </div>
    </div>
  )
}
