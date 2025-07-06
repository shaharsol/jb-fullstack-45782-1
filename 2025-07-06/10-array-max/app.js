const grades = [90, 80, 78];
const ages = [12, 24, 55, 66, 34, 21, 33];

function printMaxItemOfArray(array, label) {
  let max = 0;
  for (const item of array) {
    if (item > max) max = item;
  }
  console.log(`max ${label} is ${max}`);
}

printMaxItemOfArray(grades, "grade");

printMaxItemOfArray(ages, "age", "age");

printMaxItemOfArray(ages);
