import React from "react";

const Start = (props) => {
  return (
    <div className="container">
      <div className="outter">
        <h1>
          나는 <span>{props.name}</span> 에 대해서
          <br />
          얼마나 알고 있을까?
        </h1>
        <input className="input-box" type="text" placeholder="내 이름" />
        <button className="button">시작하기</button>
      </div>
    </div>
  );
};

export default Start;
