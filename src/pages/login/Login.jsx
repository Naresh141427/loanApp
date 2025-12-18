import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getLocalData, setLocalData } from "../../utils/storage";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("LOGIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [tempUser, setTempUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = getLocalData("users") || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast.error("Invalid email or password");
      return;
    }

    setTempUser(user);
    setStep("OTP");
    toast.success("OTP sent to registered mobile");
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp === tempUser.otp) {
      setLocalData("currentUser", tempUser);
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      {step === "LOGIN" && (
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <p className="switch-text">
            No account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      )}

      {step === "OTP" && (
        <form className="auth-form" onSubmit={verifyOtp}>
          <h2>OTP Verification</h2>

          <input
            type="text"
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default Login;
