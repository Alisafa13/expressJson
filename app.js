const express = require('express');
const fs = require('fs');
const app = express();
const userData = fs.readFileSync('./data.json');
const users = JSON.parse(userData);

app.get("/users", (req,res) => {
    res.send(users);
})
app.listen(3000, () => {
    console.log("Server calisdi");
})

