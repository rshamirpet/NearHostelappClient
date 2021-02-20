import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const UserRegister = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/search");
    }
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setError("");
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);

    const send = {
      username,
      password,
      email,
      confirmPassword
    };

    if (password != confirmPassword) {
      setError("passwords are mismatch");
      return;
    }

    try {
      const message = await axios.post(
        "https://nearhostelapi.herokuapp.com/api/user/singup",
        send
      );
      //message.data our sending data
      // console.log(message.data);
      if (message.data.status === "success") {
        history.push("/login");
      } else {
        console.log(message.error);
        setError(message.error);
      }
    } catch (err) {
      setError("Use Correct Credientils to Signup");
    }
  };
  return (
    <div className="containerLogin">
      <div className="signupbox">
        <h3>SignUp Here</h3>
        <h4>{error}</h4>
        <form onSubmit={register}>
          <p>Username</p>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Enter Username"
          />
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
          <p>Please confirm your password</p>
          <input
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-Enter Password"
          />
          <br />

          <button type="submit" className="btn btn-outline-primary">
            SignUp
          </button>

          <br />
          <p id="footer">
            Have an account? <Link to="/login">SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
