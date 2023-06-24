import { Search, ShoppingCart } from "@mui/icons-material";
import "./Navbar.css";
import { Badge } from "@mui/material";

export const Navbar = () => {
  return (
    <div className='navBar'>
      <div className="wrapper">
        <div className="Left">
          <div className="language">
            En
          </div>
          <div className="searchContainer">
            <input type="text" className="searchBar" placeholder="Search Here"/> 
            <Search/>

          </div>
        </div>
        <div className="Center">
          <h1 className="logo">Friends&Store</h1>
        </div>
        <div className="Right">
          <div className="menuItem">
            Register
          </div>
          <div className="menuItem">
            Sign-In
          </div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary"><ShoppingCart/></Badge></div>
        </div>
        
      </div>
    </div>
  )
}
 