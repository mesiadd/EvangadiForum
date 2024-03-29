// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

// const Login = () => {
//   const [userData, setUserData] = useContext(UserContext);
//   const navigate = useNavigate();
//   const [form, setForm] = useState({});
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //sending user data to database to be logged in
//       const loginRes = await axios.post(
//         "http://localhost:4000/api/users/login",
//         {
//           email: form.email,
//           password: form.password,
//         }
//       );

//       //update global state with response from backend(user-info)
//       setUserData({
//         token: loginRes.data.token,
//         user: loginRes.data.user,
//       });

//       //set localStorage with the token
//       localStorage.setItem("auth-token", loginRes.data.token);

//       //navigate user to homepage
//       navigate("/");
//     } catch (err) {
//       console.log("problem", err.response.data.msg);
//       alert(err.response.data.msg);
//     }
//   };

//   useEffect(() => {
//     if (userData.user) navigate("/");
//   }, [userData.user, navigate]);

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email: </label>
//         <input type="text" name="email" onChange={handleChange} />
//         <br />
//         <label>Password: </label>
//         <input type="password" name="password" onChange={handleChange} />
//         <br />
//         <button>submit</button>
//       </form>
//       <Link to="/signup">Create a new account</Link>
//     </div>
//   );
// };

// export default Login;
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "../Login/Login.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log("problem", err);
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  const [type, setType] = useState("password");

  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listenforPassworder function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="container-fluid login_page">
      <div className="container-fluid  py-5 d-md-flex justify-content-between login_container">
        <div className="main col-12 col-md-6 me-md-2 px-5  d-flex flex-column justify-content-center ">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/signup" className="a3">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="in1"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
            />
            <input
              className="in1   passwordinput"
              type={type}
              name="password"
              onChange={handleChange}
              placeholder="Your Password"
            />
            <span
              onClick={HandleIconChange}
              className="showHide2 container-fluid "
            >
              <Icon icon={icon} size={20} />
            </span>
            <Link
              to="/forgot-password"
              className="a3 a1  password container-fluid "
            >
              Forgot password?
            </Link>
            <button className="btn1 container-fluid ">Login</button>
          </form>
        </div>
        <div className="sideNote2 container-fluid  col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps
          </p>
          <p>
            Wheather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>

          <button className="btn2">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default Login;