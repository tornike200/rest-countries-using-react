import React from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import RegionFilter from "../components/RegionFilter";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <RegionFilter />
      <CardList />
    </div>
  );
};

export default Home;
