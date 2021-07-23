//Actions
const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "포뇨",
  score_texts: {
    60: "우린 친구! 앞으로도 더 친하게 지내요!",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "우린 둘도 없는 단짝! :)",
  },

  answers: [],

  quiz: [
    { question: "포뇨는 5살이다.", answer: "O" },
    { question: "포뇨는 주황색 머리다.", answer: "O" },
    { question: "포뇨는 물을 좋아한다.", answer: "O" },
    { question: "포뇨는 라면을 좋아한다.", answer: "O" },
  ],
};

export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return { ...state, answers: [] };
    }

    default:
      return state;
  }
}
