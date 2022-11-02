import React from "react";

export default function Result(props) {
  const mean = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    const result = total / arr.length;
    if (result % 1 !== 0) {
      return result.toFixed(2);
    }
    return result;
  };

  const median = (arr) => {
    const { length } = arr;
    arr.sort((a, b) => a - b);
    if (length % 2 === 0) {
      return (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    return arr[(length - 1) / 2];
  };

  const mode = (arr) => {
    const mode = {};
    let max = 0,
      count = 0;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  };

  return (
    <div>
      <h1>Results :</h1>
      {props.data.length === 0 ? null : (
        <div className="results">
          <p className="result_tag">Mean is : {mean(props.data)}</p>
          <p className="result_tag">Median is : {median(props.data)}</p>
          <p className="result_tag">Mode is : {mode(props.data)}</p>
        </div>
      )}
    </div>
  );
}
