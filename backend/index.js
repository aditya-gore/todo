const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
/**
 * Body {
 * title:string,
 * description : string
 * }
 */
app.post('/todo', async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong inputs',
    });
  } else {
    // * put it in mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.status(201).json({
      msg: 'Todo created',
    });
  }
});

app.get('/todos', async function (req, res) {
  let todos = await todo.find();
  res.status(200).json({
    todos,
  });
});

app.put('/completed', async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong inputs',
    });
  }
  await todo.updateOne(
    { _id: updatePayload._id },
    {
      $set: {
        completed: true,
      },
    },
  );
  res.status(200).json({
    msg: 'Todo marked as completed',
  });
});

app.listen(3000, () => {
  console.log('listening....');
});
