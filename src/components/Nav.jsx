import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto pt-4 px-1 md:px-3 text-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl md:text-3xl text-secondary shadow-lg">
          Otaku<span className="text-primary">Wave</span>
        </h1>
        <div className="flex justify-between items-center text-white">
          <Link className="px-3 py-1.5 bg-primary rounded-xl shadow-md duration-500 font-semibold hover:bg-opacity-80">LOGIN</Link>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
