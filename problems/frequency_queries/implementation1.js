// test
freqQuery([
  [1, 4],
  [1, 3],
  [2, 4],
  [3, 2]
]);
// [1]
freqQuery([
  [1, 4],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 2]
]);
// [0]

function freqQuery(queries) {
  const qMap = {};
  const numbersMap = {};
  const answers = [];
  for (const q of queries) {
    if (q[0] === 1) {
      numbersMap[q[1]] = numbersMap[q[1]] ? numbersMap[q[1]] + 1 : 1;
      if (qMap[numbersMap[q[1]]]) {
        qMap[numbersMap[q[1]]] = qMap[numbersMap[q[1]]].concat(q[1]);
      } else {
        qMap[numbersMap[q[1]]] = [q[1]];
      }
      if (qMap[numbersMap[q[1]] - 1]) {
        if (qMap[numbersMap[q[1]] - 1].length > 1) {
          qMap[numbersMap[q[1]] - 1] = qMap[numbersMap[q[1]] - 1].filter(
            el => el !== q[1]
          );
        } else {
          Reflect.deleteProperty(qMap, numbersMap[q[1]] - 1);
        }
      }
    } else if (q[0] === 2) {
      if (numbersMap[q[1]]) {
        if (qMap[numbersMap[q[1]]].length > 1) {
          qMap[numbersMap[q[1]]] = qMap[numbersMap[q[1]]].filter(
            el => el !== q[1]
          );
        } else {
          Reflect.deleteProperty(qMap, numbersMap[q[1]]);
        }
        if (qMap[numbersMap[q[1]] - 1]) {
          qMap[numbersMap[q[1]] - 1].push(q[1]);
        } else {
          qMap[numbersMap[q[1]] - 1] = [q[1]];
        }
        numbersMap[q[1]] = numbersMap[q[1]] - 1;
      }
    } else if (q[0] === 3) {
      const isFreq = !!qMap[q[1]];
      answers.push(+isFreq);
    }
  }
  return answers;
}
