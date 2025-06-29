const employee = {
  //   firstName: "Israel",
  //   middleName: "Museri",
  //   lastName: "Israeli",
  name: {
    first: "Israel",
    middle: "Museri",
    last: "Israeli",
  },
  salary: 10000,
};

console.log(
  `the employee name is ${employee.firstName} ${employee.lastName} and they earn ${employee.salary} nis`
);

employee.address = prompt("please enter your address");
delete employee.lastName;

for (const prop in employee) {
  console.log(`${prop}: ${employee[prop]}`);
}
