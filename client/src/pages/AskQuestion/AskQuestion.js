// import React from "react";
// import "./Question.css";
// import profile from "../Image/Image20230814153007.png";

// const Question = ({ question, userName }) => {
//   return (
//     <div className="d-md-flex align-items-center justify-space-between">
//       <div className="d-flex flex-md-column avatar-container">
//         <img className="avatar" src={profile} alt="Avatar" />
//         <h6 className="align-self-center ms-2 ms-md-0 text-center">
//           {userName}
//         </h6>
//       </div>
//       <div className="ms-md-5 flex-grow-1">
//         <h6 className="pt-2 pt-md-0">{question}</h6>
//       </div>
//       <div className="d-none d-md-block ms-md-5">
//         <i className="fa fa-angle-right "></i>
//       </div>
//     </div>
//   );
// };

// export default Question;
import React, { useContext, useState } from "react";
import "./AskQuestion.css"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export default function AskQuestion() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/questions", {
        id: userData.user.id,
        question: form.question,
        questionDescription: form.questionDescription,
      });
      navigate("/");
    } catch (err) {
      console.log("problem", err);
    }
  };
  return (
    <div className="newclass container-fluid  ">
      <div className="d-flex flex-column align-items-center  ">
        <h3>Steps to write a good question</h3>
        <ul className="question_steps">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-5 question_form  justify-content-between"
      >
        <h3>Ask a public question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>
        <input
          className="question_title"
          type="text"
          name="question"
          Placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          className="question_input"
          placeholder="Question Description..."
          name="questionDescription"
          onChange={handleChange}
        ></textarea>
        <button className="question_post_btn" type="">
          Post Your Question
        </button>
      </form>
    </div>
  );
}
