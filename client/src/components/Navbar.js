import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div style = {style.container}>
      <Link style={style.link} to ="/">Home</Link>
      <Link style={style.link} to ="/items">Gift Shop</Link>
      <Link style={style.link} to ="/exhibits">Exhibits</Link>
      <Link style={style.link} to="/exhibits/new">Add Exhibit</Link>
    </div>
  )
};

export default Navbar;

const style ={
  container: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    marginRight: "30px",
    marginLeft: "30px",
    fontSize: "1.25em",
  }
};