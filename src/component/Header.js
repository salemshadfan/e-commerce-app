import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "1rem" }}>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <img src="/images/logo.png" alt="Company Logo" style={{ maxHeight: "50px" }} />
      <div >Company Name</div>
    </div>
    <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
      <Link to="/" >Home</Link>
      <Link to="/products" >Products</Link>
      <Link to="/login" >Login</Link>
    </nav>
  </header>
);

export default Header;
