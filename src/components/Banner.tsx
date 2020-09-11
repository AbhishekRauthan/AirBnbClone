import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import './Banner.css'

interface Props {}

const Banner = ({}: Props) => {
  const [searchText, setSearchText] = useState<boolean>(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {searchText && <Search />}
        <Button
          onClick={() => setSearchText(!searchText)}
          className="banner__searchButton"
          variant="outlined"
        >
          {searchText ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>Plan different kind of getaway to find hidden gems near you</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;