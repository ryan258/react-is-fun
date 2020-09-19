import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100,
};

/*class SkiDayCounter extends Component {
  getPercent = (decimal) => `${decimal * 100}%`;
  calcGoalProgress = (total, goal) => this.getPercent(total / goal);

  render() {
    const { total, powder, backcountry, goal } = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal: {goal}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    );
  }
}*/

const getPercent = (decimal) => `${decimal * 100}%`;
const calcGoalProgress = (total, goal) => getPercent(total / goal);

const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal: {goal}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById("root")
);
