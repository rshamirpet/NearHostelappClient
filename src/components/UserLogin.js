import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";
const UserLogin = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/search");
    }
  }, []);

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const login = async (e) => {
    e.preventDefault();
    setError("");
    const send = {
      email,
      password
    };
    try {
      const data = await axios.post(
        "https://nearhostelapi.herokuapp.com/api/user/login",
        send
      );

      if (data.data.status === "success") {
        console.log("sucess");
        localStorage.setItem("role", data.data.data.role);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data));
        history.push("/search");
      } else {
        setError(data.data.error);
      }
    } catch (err) {
      setError("No User Found");
    }
  };
  return (
    <div className="containerLogin">
      <div className="loginbox">
        <h3>Login Here</h3>
        <h4>{error}</h4>
        <form onSubmit={login}>
          <p>Email</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter Email"
          />
          <p>Password</p>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter Password"
          />
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
          <br />
          <Link to="">Forgot your password?</Link>
          <br />
          <Link to="/register">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
