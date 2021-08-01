import React from "react";
import img from "./ponyo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "./redux/modules/rank";

const Start = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const input_text = React.useRef(null);

  return (
    <div className="container">
      <div className="outter">
        <img className="scc-img" src={img} />
        <h1>
          나는 <span>{name}</span>에 대해 얼마나 알고 있을까?
        </h1>
        <input
          ref={input_text}
          type="text"
          style={{
            padding: "7px",
            margin: "20px 0px",
            border: "1px solid #4374d9",
            borderRadius: "20px",
            width: "40%",
            textAlign: "center",
          }}
          placeholder="내 이름"
        />
        <button
          className="button"
          onClick={() => {
            dispatch(addUserName(input_text.current.value));
            props.history.push("/quiz");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

// style={{
//   display: "flex",
//   height: "100vh",
//   width: "100vw",
//   overflow: "hidden",
//   padding: "16px",
//   boxSizing: "border-box",
// }

// style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
//   height: "100vh",
//   width: "100vw",
//   overflow: "hidden",
//   padding: "0px 10vw",
//   boxSizing: "border-box",
//   maxWidth: "400px",
//   margin: "0px auto",
// }

// const text-box = styled.div`
//   padding: "10px",
//   margin: "24px 0px",
//   border: "1px solid #dadafc",
//   borderRadius: "30px",
//   width: "100%",
//   // backgroundColor: "#dadafc55",
// `;

export default Start;
