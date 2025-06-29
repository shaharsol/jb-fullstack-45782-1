const salaries = [
  10000, 9000, 11500, 8000, 6750, 33330, 46000, 52000, 80000, 6450,
];

let sum = 0;
let max = 0;
for (const salary of salaries) {
  console.log(salary);

  sum += salary;

  if (salary > max) max = salary;
}

console.log(`average salary is ${sum / salaries.length}`);
console.log(`maximum salary is ${max}`);
