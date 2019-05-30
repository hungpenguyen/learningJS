const todos = [{
  text: 'clean garage',
  completed: false
}, {
  text: 'throw trash',
  completed: true
}, {
  text: 'wash car',
  completed: false
}, {
  text: 'buy groceries',
  completed: true
}, {
  text: 'homework',
  completed: false
}];

//go through array and delete object.

const deleteTodo = (todos, todoText)=>{
  const index = todos.findIndex((todo)=>{
    return todo.text.toLowerCase() === todoText.toLowerCase();
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, 'throw trash');
console.log(todos);

//show only the ones that are false/incompleted
const notCompleted = (todosList, completion)=>{
  return todosList.filter((item, index)=>{
    return item.completed === false
  })
}

console.log(notCompleted(todos));
