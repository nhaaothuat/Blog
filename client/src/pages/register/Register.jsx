import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post("http://localhost:8800/api/auth/register", inputs);
  //   } catch (err) {
  //     setErr(err.response.data);
  //   }
  // };

  const handleClick = async (e) => {
    e.preventDefault();

    // Kiểm tra định dạng email bằng regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.name) {
      setErr("All fields are required");
    } else if (!emailRegex.test(inputs.email)) {
      setErr("Invalid email format. Please use the format user@gmail.com");
    }else{
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
      } catch (err) {
        setErr(err.response.data);
      }
    }
      
    
  };

  console.log(err);

  return (
    <div className="register">
      <video
        src="https://cdn.pixabay.com/vimeo/580974552/building-82364.mp4?width=960&hash=8839b59eff29c9a2bb0616a0e8fde322e37e4236"
        autoPlay
        loop
        muted
      />
      <div className="card">
        <div className="left">
          <h1>ABBEY</h1>
          <p>
            If you don't have solution , we will become your solution. I can do
            it and you too. Don't give up and try it!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username: Test1"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email: user@gmail.com"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name: Nguyen Van A "
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
