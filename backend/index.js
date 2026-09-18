import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    //send a response to the client
    res.status(200).send("You get the notes");
})
app.post("/api/notes", (req, res) => {
    res.status(201).send("You created a note");
})


app.listen(5001, () => {
    console.log("Server is running on port 5001");
});