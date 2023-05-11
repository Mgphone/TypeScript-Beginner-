"use strict";
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: -20,
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
let props = "Pizza";
console.log(todaysTransaction[props]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40;
console.log(todaysTransaction["Dave"]);
const student = {
    name: "Phone",
    GPA: 3.5,
    classess: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student${key}:${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
