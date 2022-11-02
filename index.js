const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();

app.get("/", (req, res) => {
    res.send("Durai Singam: Illegal Entry...");
});

app.get("/:id", (req, res) => {
    res.send("Durai Singam: Illegal Entry...");
});

app.post("/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await User.doc(id).update(req.body);
    res.send("Data Updated Successfully");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("App Successfully Running at PORT "+process.env.PORT);
})