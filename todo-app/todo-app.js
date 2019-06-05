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

// show how many todos left
// show each p for each todo item

const todosLeft = todos.filter((todoItem)=>{
  return !todoItem.completed;
})

const summary = document.createElement('h3');
summary.textContent = `You have ${todosLeft.length} things left`;
document.querySelector('body').appendChild(summary);

const incompleteTodo = todos.forEach((todo)=>{
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('body').appendChild(p);
})
