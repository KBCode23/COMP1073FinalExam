// JavaScript Document

//this creates a person object
//the constructor function creates variables that the object holds
//when an instance is created, it must be initialized with values in these variables, thats what the constructor does
//when the constructor is called, its not constructor, but the name of the object itself.
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//this is one of the object's functions
//lets say a 'dude' person was created, then you could call dude.greeting and it would execute this function
//the this keyword is used to retrieve the current object's variable in question. it is unnessecary to say dude.name, beacause we are already inside the context of the dude object. So this means this object.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

//here is another of the object's functions. This one works in the same fashion as the previous function. It simply prints text that has been concatenated with the current object's variable to the console.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//Here are two instances of the person object. The constructor is called and the four variables are initialized and filled. A parth object of type Person is created, etc.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//Here, the teacher object inherits the Person object, and all the variableas that come with it.
//The super keyword says which variables are inherited from the person class, as the teacher object has additional variables that person does not have.
//Because the subject and grade varibales dont exist in the person class, they must now be initialized in the teacher constructor.
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

let drJones = new Teacher("Indiana Jones", 30, "male", ["Archeology", "History"], "Ancient History", "University");

console.log("Henry Jr. Teaches " + drJones.subject + ".");
