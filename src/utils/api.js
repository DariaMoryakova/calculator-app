import axios from "axios";
export default {
  callProxy: function(route, x, y) {
    return axios.get(
      `http://kevin-45c9c78a-eval-test.apigee.net/calculator-master/${route}?x=${x}&y=${y}`
    );
  }
};
// api links
// http://kevin-45c9c78a-eval-test.apigee.net/calculator-master/
// diff
// exp
// div
