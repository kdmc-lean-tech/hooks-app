
export const todosReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return deleteTodoByIndex([...state], action.payload);
    case 'toogle':
      return toogleTodoByid([...state], action.payload);
    default:
      return state;
  }
};

const deleteTodoByIndex = (todos, index) => {
  todos.splice(index, 1);
  return todos;
}

const toogleTodoByid = (todos, toogleId) => {
  return todos.map(t => (t.id === toogleId ? { ...t, done: !t.done } : t));
}
