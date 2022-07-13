const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function answersQnt(array1, array2, func) {
  return func(array1, array2);
}

function verify(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== 'N.A' && b[i] !== 'N.A'){
      count += (a[i] === b[i]) ? 1 : 0.5;
    }
  }
  return count;
}

console.log(answersQnt(STUDENT_ANSWERS, RIGHT_ANSWERS, verify));