import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

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
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Home;
