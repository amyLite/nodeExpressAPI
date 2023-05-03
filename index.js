import express from "express";
import bodyParser from "body-parser"; // to take post requests body
import router from "./routes/users.js"

const app = express();
const PORT = 5005;

app.use(bodyParser.json());
app.use("/users", router);

app.get('/', (req, res) => {
    console.log("TST!");
    res.send("Welcome to homepage");
})
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));