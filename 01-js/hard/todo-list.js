/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.tod = [];
  }

  add(todo){
    this.tod.push(todo);
  }

  remove(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.tod.length){
      this.tod.splice(indexOfTodo, 1);
    }
    
    
  }

  update(index, updatedTodo){
    if(index < this.tod.length && index >= 0){
      this.tod[index] = updatedTodo;
    }
    else {
      console.error("Index out of bounds");
    }
    
  }

  getAll(){
    return this.tod;
  }
  
  get(indexOfTodo){
    if(indexOfTodo < this.tod.length && indexOfTodo >= 0){
      return this.tod[indexOfTodo]
    }
    return null;
    
  }

  clear(){
    this.tod = [];
  }
}

module.exports = Todo;
