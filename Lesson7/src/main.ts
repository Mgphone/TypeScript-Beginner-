//Index Signatures
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: -20,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);

let props: string = "Pizza";
console.log(todaysTransaction[props]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransaction));

// todaysTransaction.Pizza = 40;

console.log(todaysTransaction["Dave"]);
//////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classess?: number[];
}

const student: Student = {
  name: "Phone",
  GPA: 3.5,
  classess: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student${key}:${student[key]}`);
};

logStudentKey(student, "name");
///////////////////////////
type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
