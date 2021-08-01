import React from "react";
import styled from "styled-components";
import img from "./ponyo.jpg";
import TinderCard from "react-tinder-card";
import SwipeItem from "./SwiptItem";
import Score from "./Score";
import Progress from "./Progress";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

const Quiz = (props) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const quiz = useSelector((state) => state.quiz.quiz);

  const num = answers.length;
  const onSwipe = (direction) => {
    let _answer = direction === "left" ? "O" : "X";

    if (_answer === quiz[num].answer) {
      // 정답일 경우,
      dispatch(addAnswer(true));
    } else {
      // 오답일 경우,
      dispatch(addAnswer(false));
    }
  };

  if (num > quiz.length - 1) {
    return <Score {...props} />;
    // return <div>퀴즈 끝!</div>;
  }

  return (
    <QuizContainer>
      <Progress />
      <p>
        <span>{num + 1}번 문제</span>
      </p>
      {quiz.map((l, idx) => {
        if (num === idx) {
          return <Question key={idx}>{l.question}</Question>;
        }
      })}

      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>

      {quiz.map((l, idx) => {
        if (idx === num) {
          return (
            <DragItem key={idx}>
              <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={onSwipe}
                onCardRightScreen={onSwipe}
                preventSwipe={["up", "down"]}
              >
                <img src={img} />
              </TinderCard>
            </DragItem>
          );
          //   <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  & > p > span {
    padding: 8px 16px;
    background-color: #ffe08c;
    border-radius: 30px;
    font-weight: bold;
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 600;
  color: #dadafc77;
`;

const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  & img {
    max-width: 130px;
  }
`;

const Finish = styled.p`
  text-align: center;
  margin-top: 300px;
  font-weight: 600;
  font-size: 30px;
`;

export default Quiz;
