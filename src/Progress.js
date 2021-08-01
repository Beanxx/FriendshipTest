import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const quiz_list = useSelector((state) => state.quiz.quiz);
  const answers = useSelector((state) => state.quiz.answers);
  let count = answers.length;

  return (
    <ProgressBar>
      <HighLight width={(count / quiz_list.length) * 100 + "%"}></HighLight>
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  width: 80%;
  margin: 40px auto;
  margin-bottom: 80px;
  background: #eee;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #df402c88;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
  transition: width 1s;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #df402c88;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export default Progress;
