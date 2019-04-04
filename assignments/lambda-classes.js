// CODE here for your Lambda Classes
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name`
//  and `location` are the object's own props
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase
//   *  'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments
//   *  and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        `${student.name} receives a perfect score on ${subject}`;
    }
}

const john = new Instructor({
    name: 'John',
    location: 'VanFleet',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Be your own boss.`
  });

  const tom = new Instructor({
    name: 'Tom',
    location: 'Brady',
    age: 45,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'back-end',
    catchPhrase: `Work hard. Study harder.`
  });
  console.log(john);
  console.log(tom);
  console.log(tom.speak());
  console.log(john.speak());
// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the
//   *  `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun
//   *  sprint challenge on {subject}`
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects; //array
    }
    listSubjects(){
        for(let i=0;i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const van = new Student({
    name: 'Van',
    location: 'Jordan',
    age: 47,
    gender: 'male',
    previousBackground: 'Database Developer', 
    className: 'CS 101', 
    favSubjects: ['Machine Learning', 'Web Development']
  });

  const nathan = new Student({
    name: 'Nathan',
    location: 'Ly',
    age: 11,
    gender: 'male',
    previousBackground: 'Super-genious since birth', 
    className: 'AI 101', 
    favSubjects: ['Itro to Programming', 'Web Development']
  });
console.log(van);
console.log(nathan);
// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name}
//   *  announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject
//   *  and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;           
    }
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`;
    }
    debugsCode(student, subject){
        `${this.name} debugs ${student.name} on ${subject}`;
    }
}

const jorge = new ProjectManager({
    name: 'Jorge',
    location: 'Gonzalez',
    age: 38,
    gender: 'male',
    gradClassName: 'Web01', 
    favInstructor: 'Josh Knell'       
  });

  const sandy = new ProjectManager({
    name: 'Sandy',
    location: 'Alameda',
    age: 33,
    gender: 'female',
    gradClassName: 'iOS01', 
    favInstructor: 'Josh Knell'       
  });

  console.log(jorge);;
  console.log(sandy);