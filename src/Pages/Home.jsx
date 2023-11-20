import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using it

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to My Diary App</h1>
        <p className="lead">
          Begin your journey of self-reflection and expression with our
          user-friendly diary platform.
        </p>
        <hr className="my-4" />
        <p>
          Ready to get started? Click the button below to create your first
          entry.
        </p>
        <p className="lead">
          <Link to="/new" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
