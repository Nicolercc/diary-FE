import React from "react";
import { Link } from "react-router-dom";
import Total from "../Components/Total";

function Home() {
  return (
    <div className="container my-5 text-center">
      <div className="">
        <h1 className="display-4">Welcome to My Diary App</h1>
        <p className="lead">
          Begin your journey of self-reflection and expression with our
          user-friendly diary platform.
        </p>
        <hr className="my-4" />
        <p>
          Ready to get started? Click the button below to share your thoughts
        </p>
        <p className="lead">
          <Link to="/new" className="btn btn-success btn-lg">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
