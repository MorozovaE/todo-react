export class TaskList {
  constructor() {
    this.tasks = [];
  }

  // addTask(objTask) {
  //   this.tasks.push(objTask);
  // }
  // deleteTask(objTask) {
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (objTask.strTask == this.tasks[i].strTask) {
  //       this.tasks.splice(i, 1);
  //     }
  //   }
  // }
  
  // insert(index, objTask) {
  //   this.tasks.splice(index, 0, objTask);
  // }

  // getItem(index) {
  //   return this.tasks[index];
  // }

  // getAll() {
  //   return this.tasks;
  // }

  // edit(index, objTask) {
  //   this.tasks[index] = objTask;
  // }

  // findItem(subStr) {
  //   let foundElements = [];
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if ((this.tasks[i].strTask.indexOf(subStr, 0)) > -1) {
  //       foundElements.push(this.tasks[i]);
  //     }
  //   }
  //   return foundElements;
  // }
  // addToCompletedTasks(index) {
  //   this.completedTasks.push(this.tasks.splice(index,1))
  // }
}
