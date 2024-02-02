import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/UserContext";
import Header1 from "./Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./Footer/Footer";
import SignUp from "./pages/Signup/Signup";


import AskQuestion from "./pages/AskQuestion/AskQuestion";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword/ResetByNewPassword";
import ResetSent from "./ForgotPassword/ResetSent";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ResetByNewPassword from "./ForgotPassword/ResetByNewPassword";

function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    } else {
      try {
        const userRes = await axios.get("http://localhost:4000/api/users", {
          headers: { "x-auth-token": token },
        });
        // console.log(userRes);
        setUserData({
          token,
          user: {
            id: userRes.data.data.user_id,
            display_name: userRes.data.data.user_name,
          },
        });
      } catch (error) {
        console.log(error)
        
      }
      
    }
  };
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <Header1 logout={logout} />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/reset-sent" element={<ResetSent />} />
        <Route path="/reset" element={<ResetByNewPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

// import axios from "axios";

// import { useContext, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { UserContext } from "./context/UserContext";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUP/SINGUP";
// function App() {
//   const [userData, setUserData] = useContext(UserContext);

//   const checkLoggedIn = async () => {
//     //check if token already exists in localStorage
//     let token = localStorage.getItem("auth-token");
//     if (token === null) {
//       //token not in localStorage then set auth token empty
//       localStorage.setItem("auth-token", "");
//       token = "";
//     } else {
//       //if token exists in localStorage then use auth to verify token and get user info
//       const userRes = await axios.get("http://localhost:4000/api/users", {
//         headers: { "x-auth-token": token },
//       });

//       //set the global state with user info
//       setUserData({
//         token,
//         user: {
//           id: userRes.data.data.user_id,
//           display_name: userRes.data.data.user_name,
//         },
//       });
//     }
//   };

//   const logout = () => {
//     //set global state to undefined will logout the user
//     setUserData({
//       token: undefined,
//       user: undefined,
//     });

//     //resetting localStorage
//     localStorage.setItem("auth-token", "");
//   };

//   useEffect(() => {
//     //check if the user is logged in
//     checkLoggedIn();
//   }, []);
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />

//           {/* passing logout function as props to Home page */}
//           <Route path="/" element={<Home logout={logout} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
