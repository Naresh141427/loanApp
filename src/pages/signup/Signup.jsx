import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getLocalData, setLocalData } from "../../utils/storage";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getLocalData("users") || [];

    const emailExists = users.some(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      toast.error("Email already registered");
      return;
    }

    const newUser = {
      ...formData,
      id: Date.now(),
      otp: "123456", 
    };

    users.push(newUser);
    setLocalData("users", users);

    toast.success("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
