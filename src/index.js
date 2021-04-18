import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();
// console.log(todoList.todos);
// todoList.todos.forEach( todo => crearTodoHtml(todo) );
todoList.todos.forEach( crearTodoHtml );


const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);
// todoList.todos[0].imprimirClase();
console.log('todo', todoList.todos);

// Examples persistencia de datos ----------
// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');
// setTimeout( () => {
//   localStorage.removeItem('mi-key');
// }, 1500);

