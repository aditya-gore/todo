const express = require('express');
const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require('./types');
/**
 * Body {
 * title:string,
 * description : string
 * }
 */
app.post('/todo', function (req, res) {
  let data = req.body;
  const parsedPayload = createTodo.safeParse(data);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong inputs',
    });
  }
  // * put it in mongodb
});

app.get('/todos', function (req, res) {});

app.put('/completed', function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong inputs',
    });
  }
});

app.listen(3000, () => {
  console.log('listening....');
});
