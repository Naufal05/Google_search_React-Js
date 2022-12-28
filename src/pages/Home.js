import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* About */}
          <Link to="about">About</Link>
          {/* Store */}
          <Link to="store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/* Gmail */}
          <Link to="gmail">Gmail</Link>

          {/* Images */}
          <Link to="images">Images</Link>

          {/* Icons */}
          <AppsIcon />
          {/* Avatar */}
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://lh3.googleusercontent.com/G6EguwlJWMCAREZ1eK5wjDYCPFGnW3M3nymJykIyA0cz-aQuMQf18em5DwIs39Xd4bYi7QYlIi5g9nSyrtDSyChzo0kts5AX3Xv8enTV=s660"
          alt="Google Logo"
        />
        <div className="home__inputContainer">
          {/* Search */}
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
