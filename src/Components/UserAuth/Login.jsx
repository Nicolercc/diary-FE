// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css"; // Create a CSS file for your styles

const Login = () => {
  //   const [loginData, setLoginData] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const handleInputChange = (e) => {
  //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
  //   };
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post("/api/login", loginData);
  //       console.log("Login successful:", response.data);
  //       // Redirect or show a success message
  //     } catch (error) {
  //       console.error("Login failed:", error.response.data);
  //       // Handle login error (e.g., display an error message)
  //     }
  //   };
  //   return (
  //     <div className="login-container">
  //       <div className="login-card">
  //         <h2>Login</h2>
  //         <form onSubmit={handleLogin}>
  //           <label>
  //             Email:
  //             <input
  //               type="email"
  //               name="email"
  //               value={loginData.email}
  //               onChange={handleInputChange}
  //             />
  //           </label>
  //           <label>
  //             Password:
  //             <input
  //               type="password"
  //               name="password"
  //               value={loginData.password}
  //               onChange={handleInputChange}
  //             />
  //           </label>
  //           <button type="submit">Login</button>
  //         </form>
  //         <p>
  //           Don't have an account? <a href="/register">Register Here</a>
  //         </p>
  //       </div>
  //     </div>
  //   );
};

export default Login;
