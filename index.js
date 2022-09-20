// let tasks = [];

// function addTask(objTask){
//   tasks.push(objTask);
// }
// /////////////////////////////////////////
// let tasksOld = [];

// function addTask(tasks, objTask){
//   tasks = JSON.parse(JSON.stringify(tasks))
//   tasks.push(objTask);
//   return tasks
// }

// tasksNew = addTask(tasksOld, "play piano");
// tasksNew1 = addTask(tasksOld, "play piano");
// tasksNew2 = addTask(tasksOld, "play piano");
// /////////////////////////////////////////////////////////
// // addTask("play tennis");
// // addTask("play comp");
// // addTask("task");
// // addTask("task2");
// // addTask("task3");

// console.log(tasks);

// // function deleteTask(objTask){
// //   for(let i = 0; i < tasks.length;i++){
// //     if(objTask == tasks[i]){
// //       tasks.splice(i,1)
// //     }
// //   }
// // }

// // console.log(deleteTask("task2"));

// let todo = new tasks()
// todo.addTask("Test1")
// todo.addTasl("Test2")
// todo.ediTask(1, "TEst3")
///////////////////////////////////////////////////////

class Todo {
  constructor() {
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(objTask) {
    this.tasks.push(objTask);
  }

  deleteTask(objTask) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (objTask.strTask == this.tasks[i].strTask) {
        this.tasks.splice(i, 1);
      }
    }
  }

  insert(index, objTask) {
    this.tasks.splice(index, 0, objTask);
  }

  getItem(index) {
    return this.tasks[index];
  }

  getAll() {
    return this.tasks;
  }

  edit(index, objTask) {
    this.tasks[index] = objTask;
  }

  findItem(subStr) {
    let foundElements = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if ((this.tasks[i].strTask.indexOf(subStr, 0)) > -1) {
        foundElements.push(this.tasks[i]);
      }
    }
    return foundElements;
  }
  addToCompletedTasks(index) {
    this.completedTasks.push(this.tasks.splice(index,1))
  }
}

class Task {
  constructor(strTask, priority) {
    this.strTask = strTask;
    this.priority = priority;
  }

}
let task1 = new Task("first", 1);
let taskTest = new Task("by", 6);

let tasksList = new Todo();

tasksList.addTask(task1);
tasksList.addTask({ strTask: "second task", priority: 2 });
tasksList.addTask({ strTask: "hey", priority: 5 });
tasksList.addTask({ strTask: "hi", priority: 7 });


tasksList.addToCompletedTasks(0);
tasksList.addToCompletedTasks(0);

console.log(tasksList);

//класс,объект(экземпляр класса), свойства , методы, this

//////////////////////////////////////////////////////////////////////////////////////////////

// class Animal {
//   static type = "Ani";

//   constructor(options){
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voice(){
//     console.log("HII");
//   }
// }

// class Cat extends Animal{
//   constructor(options) {
//     super(options)
//     this.color = options.color;
//   }
//   voice(){
//     super.voice();
//     console.log("bye");
//   }
//   get ageInfo(){
//     return this.age * 7;
//   }
//   set ageInfo(newAge){
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: "nono",
//   age: 3,
//   hasTail: true,
//   color: "black"
// })

// const animal = new Animal({
//   name: "Zhuzhu",
//   age: 2,
//   hasTail: true,
// });
// animal.voice()
// console.log(animal);

/////////////////////////////////////////////////////////////////////////////////////////////

// class Component{
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide(){
//     this.$el.style.display = "none";
//   }
//   show(){
//     this.$el.style.display = "block";

//   }
// }

// class Box extends Component{
//   constructor(options) {
//     super(options.selector);

//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }
// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red"
// })

///////////////////////////////////////////

let a = {
  text: "hello",
  color: "red"
}
let b = {
    fontSize: "24px",
    __proto__: a
}

console.log(b.text);
b.text = "hi";
console.log(a.text);