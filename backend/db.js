/**
 * Todo {
 * title:string,
 * description: string,
 * completed: boolean
 * }
 */
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://adityagore:68H72HYULF07gZLh@cluster0.gj8xrrd.mongodb.net/',
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo,
};
