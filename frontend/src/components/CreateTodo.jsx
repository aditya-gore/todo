import { useState } from 'react';

/* eslint-disable no-unused-vars */
export function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type='text'
        placeholder='title'
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type='text'
        placeholder='description'
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      {/* style={{ padding: 10, margin: 10 }} */}
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              contentType: 'application/json',
            },
          }).then(async function (res) {
            await res.json();
            alert('Todo Added');
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
