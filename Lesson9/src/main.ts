//Utilify Types

//Partial changes all the properties in an obj to be optional

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  vertified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "adfdf",
  title: "final Proj",
  grade: 0,
};

console.log(assign1);
console.log(updateAssignment(assign1, { grade: 34 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
////////////////////////////////////////
//Required and readonly change all the properties in an obj to be required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send database or save
  return assign;
};
recordAssignment({ ...assignGraded, vertified: true });
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :) coz that is readonly and required

recordAssignment({ ...assignGraded, vertified: true });
//////////////////

//Record....Record is a shortcut to
// defining an object type with a specific key type and value type.

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly" | "Phone";
type LetterGrades = "A" | "B" | "C" | "U";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
  Phone: "C",
};

interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 100, assign2: 200 },
  Kelly: { assign1: 100, assign2: 200 },
  Phone: { assign1: 100, assign2: 200 },
};
/////Pick and Omit
//Omit removes keys from an object type.
//Pick removes all but the specified keys from an object type.
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "34343",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "vertified">;

const preview: AssignPreview = {
  studentId: "adfadf",
  title: "Typescript",
};

///Exclude and Extract
//Exclude or Extract removes types from a union.
type adjusttheGrade = Exclude<LetterGrades, "U">;
type highGrade = Extract<LetterGrades, "A" | "B">;

//Nonnuallable
type AllPossibleGrade = "Dave" | null | undefined | "Phone";
type NamesOnly = NonNullable<AllPossibleGrade>;
////////////////////////
//Return Type
// ReturnType extracts the return type of a function type.
// type newAssign={title:string,points:number}
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type newAssign = ReturnType<typeof createNewAssign>;
const tsAssign: newAssign = createNewAssign("Utilti 1", 30);
console.log(tsAssign);

///////////////////////////
//Parameters
// Parameters extracts the parameter types of a function type as an array.
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Number", 1];
const tAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tAssign2);
//////////////////////////////

// Awaited - helps us with the ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then((users) => console.log(users));
