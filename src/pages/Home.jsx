import React from "react";
import Nav from "./Nav";
import Content from "./Content";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 w-screen ">
      <Nav />
      <Content />
    </div>
  );
}

export default Home;
