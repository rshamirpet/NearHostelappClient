import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     history.push("/search");
  //   }
  // }, []);
  const forgot = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const message = await axios.post(
        "https://nearhostelapi.herokuapp.com/api/user/forgot",
        { email: email }
      );

      if (message.data.status == "success") {
        setSuccess("Check Your Mail to Reset Password");
      } else {
        setError("No User Found");
      }
    } catch (err) {
      setError("No User Found");
    }
  };

  if (success) {
    return (
      <div className="container">
        <div className="loginbox">
          <h3>Mail Sent Successfully</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="loginbox">
          <h3>Forgot Password</h3>
          <h4>{error}</h4>
          <form onSubmit={forgot}>
            <p>Email</p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter Email"
            />
            <button type="submit" className="btn btn-outline-primary">
              Reset Link
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default ForgotPassword;
