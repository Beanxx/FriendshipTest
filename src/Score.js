import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreContainer>
      <Text>
        <span>{props.name}</span> 퀴즈에
        <br />
        대한 내 점수는?
      </Text>
      <MyScore>
        <span>100</span>점<p>{props.scoreMsg}</p>
      </MyScore>
      <Button>랭킹보기</Button>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column; //세로로 객체 배열
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 1.5em;
  margin: 0px;
  line-height: 1.7;
  text-align: center;

  & span {
    background-color: #ffe08c;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

const MyScore = styled.div`
  & span {
    border-radius: 25px;
    padding: 5px 10px;
    background-color: #ffe08c;
  }
  font-weight: 600;
  font-size: 2em;
  margin: 25px;
  text-align: center;

  & > p {
    margin: 20px 0px;
    font-size: 18px;
    font-weight: 550;
  }
`;
const Button = styled.button`
  color: white;
  padding: 10px 20px;
  background-color: #6799ff;
  border-radius: 30px;
  margin: 10px;
  border: 1px solid #b2ccff;
  width: 70vw;
`;

export default Score;
