import axios from "axios";
export default {
  callProxy: function(route, x, y) {
    let args = Array.prototype.slice.call(arguments);
    let numTest = Number(x) + Number(y);
    const doesNotExist = x => x === undefined; // returns true

    if (args.some(doesNotExist) || isNaN(numTest)) {
      return new Promise((resolve, reject) => {
        reject({
          code: 400,
          message: `Error: please make sure you specify two numbers and select an operator`
        });
      });
    }
    return axios.get(
      `https://kevin-45c9c78a-eval-test.apigee.net/calculator-master/${route}?x=${x}&y=${y}`
    );
  }
};
