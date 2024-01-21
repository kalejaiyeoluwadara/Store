import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import Banner from "../components/Banner";
import { useGlobal } from "../context";

function Home() {
  const { filters } = useGlobal();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col overflow-x-hidden w-screen ">
      <Nav />
      <Content />
      {filters.length > 0 && <Banner />}
    </div>
  );
}

export default Home;
