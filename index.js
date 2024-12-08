// Express module ko import karna
import express from "express";

const app = express();
const port = 3000;

// Middleware setup, jisse hum JSON body ko handle kar sakein
app.use(express.json());

// Sample users array
const users = [
  {
    id: 1,
    name: "Abdul Rafay",
  },
  {
    id: 2,
    name: "HAmmad Haider",
  },
];
//ye get ka route
app.get("/", (req, res) => {
  res.send("Hello World!");
});


//is 'get' se sary user aajaengy add krny k bd
app.get("/users", (req, res) => {
  res.json(users);
});

//new user k liiye
app.post("/user", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  // Naya user create karna
  users.push({
    id: Date.now(), 
    name,
  });

  res.send({
    message: "User added successfully",
    data: users,
  });
});

// Server ko start karna
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
