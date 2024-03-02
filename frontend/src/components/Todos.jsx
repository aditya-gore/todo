/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button style={{ margin: 10, padding: 10 }}>
              {todo.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
