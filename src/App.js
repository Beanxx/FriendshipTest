import React from "react";
import "./App.css";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "포뇨",
      page: "quiz",
      scoreMsg: "아주 친한 친구 사이:)",
      list: [
        { question: "포뇨는 5살이다.", answer: "O" },
        { question: "포뇨는 검정색 머리다.", answer: "X" },
        { question: "포뇨는 물을 좋아한다.", answer: "O" },
        { question: "포뇨는 라면을 싫어한다.", answer: "" },
      ],

      ranking: [
        { rank: 1, name: "최수빈", message: "안녕, 포뇨야!" },
        { rank: 2, name: "배인혁", message: "포뇨 HI~" },
        { rank: 3, name: "김원필", message: "안녕, 포뇨!" },
        { rank: 4, name: "송건희", message: "포뇨포뇨" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.page === "quiz" && <Quiz list={this.state.list} />}
        {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "score" && (
          <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />
        )}
      </div>
    );
  }
}

export default App;
