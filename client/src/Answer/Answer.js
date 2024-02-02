import React from "react";
import profile from "../Image/Image20230814153007.png";
import "./Answer.css";

const Answer = ({ answer, userName }) => {
  return (
    <div className="container-fluid">
      <hr />
      <div className="all">
        <div className="img_and_username">
          <img className="avatar" src={profile} alt="User Avatar" />
          <h6 className="userName">{userName}</h6>
        </div>
        <div className="answer">
          <h6 className="">{answer}</h6>
        </div>
      </div>
    </div>
  );
};

export default Answer;

// // import React from "react";
// // import profile from "../Image/Image20230814153007.png";
// // const Answer = ({ answer, userName }) => {
// //   return (
// //     <div>
// //       <hr />
// //       <div className="d-md-flex align-items-center justify-space-between">
// //         <div className="d-flex flex-md-column">
// //           <img className="avatar" src={profile} alt="User Avatar" />
// //           <h6 className="align-self-center ms-2 ms-md-0">{userName}</h6>
// //         </div>
// //         <div className="ms-md-5">
// //           <h6 className="pt-2 pt-md-0">{answer}</h6>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// import React from "react";
// import profile from "../Image/Image20230814153007.png";
// const Answer = ({ answer, userName }) => {
//   return (
//     <div>
//       <hr />
//       <div className="d-md-flex align-items-center justify-space-between">
//         <div className="d-flex flex-md-column">
//           <img className="avatar" src={profile} alt="User Avatar" />
//           <h6 className=" ms-2 ms-md-0">{userName}</h6>
//         </div>
//         <div className="ms-md-5 answer">
//           <h6 className=" pt-md-0   ">{answer}</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Answer;

// export default Answer;
