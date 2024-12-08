const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// GET Route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// POST Route
app.post("/add", (req, res) => {
    const { name } = req.body; 
    if (!name) {
        return res.status(400).send("Name is required");
    }
    res.send(`User ${name} added successfully!`);
});


//isse server start hoga to pata chal jaega
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
