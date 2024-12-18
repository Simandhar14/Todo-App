import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({}));

app.get("/todos", async (req, res) => {
  const response = await todo.find({});
  res.json({
    todolist: response,
  });
});

app.post("/todo", async (req, res) => {
  const createbody = req.body;
  const parse = createTodo.safeParse(createbody);
  if (!parse.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  await todo.create({
    title: createbody.title,
    description: createbody.description,
  });
  res.json({
    msg: "todo created",
  });
});

app.put("/completed", async (req, res) => {
  const create = req.body;
  const parse = upateTodo.safeParse(create);
  if (!parse.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  await todo.update(
    { _id: req.body.id },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo has been updated",
  });
});

app.listen(3000);
