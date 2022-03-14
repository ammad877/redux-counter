import React from "react";
import { connect } from "react-redux";

function Counter(prop) {
  console.log(prop, "prop");
  return (
    <div>
      <h1>COUNTER</h1>
      <h3>{prop.counter}</h3>
    </div>
  );
}

const mapReduxStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const newApp = connect(mapReduxStateToProps)(Counter);

export default newApp;
