import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://simandhar:0X1EvZp4JkPKeaqU@cluster0.luenx.mongodb.net/todos"
);
const todoschema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);

export { todo };
