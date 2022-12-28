import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Search(hideButtons = false) {
  const [input, setInput] = useState(" ");
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("You clicked Search button >>", input);
    history.push(`/search`);
  };
  return (
    // change the div to form
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonshidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button type="submit" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
