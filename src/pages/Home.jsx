import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 w-screen ">
      <Nav />
      <Banner />
      <Content />
    </div>
  );
}

export default Home;
