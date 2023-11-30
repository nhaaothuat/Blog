import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
//
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!inputs.username || !inputs.password) {
      setErr("All fields are required");
      return;
    }
      try {
        await login(inputs);
        navigate("/");
      } catch (err) {
        setErr(err.response.data);
      }
    
  
 
    
  };

  return (
    <div className="login">
      {/* <video src="https://cdn.pixabay.com/vimeo/860734645/flower-178826.mp4?width=640&hash=bf41c0f24702a6a21b8efaadeadabe988d1a6192" /> */}
      <video
        src="https://cdn.pixabay.com/vimeo/573496156/skyscrapers-80724.mp4?width=1280&hash=822e477595f0d536ca1755e9e7a7a8ba46e47258"
        autoPlay
        loop
        muted
      />
      <div className="card">
        <div className="left">
          {/* <video src="https://cdn.pixabay.com/vimeo/410610193/space-36471.mp4?width=1280&hash=86393cdeb925f0378d0768f8e51bb156019c5e5a" autoPlay loop muted /> */}
          <h1>ABBEY</h1>
          <p>Wellcome to Blog</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            {/*  */}
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            {/* onChange={handleChange} */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
            {/*  */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
