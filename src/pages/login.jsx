import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {

      sessionStorage.setItem("loggedIn", "true");

      navigate("/discover", { replace: true });
    }
  };

  useEffect(() => {

    const loggedIn = sessionStorage.getItem("loggedIn");

    if (loggedIn) {
      navigate("/discover", { replace: true });
    }

  }, [navigate]);

  return (
    <div className="login">

      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin} className="login-form">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;