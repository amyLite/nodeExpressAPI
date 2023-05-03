import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let user = [
    {
        firstName:"Amarinder",
        lastName: "Singh",
        age: 26
    },
    {
        firstName:"Ravi",
        lastName: "Kumar",
        age: 28
    },
]

router.get("/", (req, res) => res.send(user));

router.get("/:id", (req, res) => {
    const id = req.params.id;
    try{
        const userNow = user.find((user) => user.id === id);
        res.send(userNow);
    }
    catch{
        res.send("Id not found");
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id
    // userTODelete = user.find((user) => user.id === id);
    user = user.filter((u) => u.id !== id)
    res.send(`user with id ${id} has been deleted`);
});

router.post("/", (req, res) => {
    const new_user = req.body

    user.push({...new_user, id:uuidv4()});
    res.send(`user ${new_user.firstName} has been added.`);
});

router.patch("/:id", (req, res) => {
    const {firstName, lastName, age} = req.body;
    const id = req.params.id;
    const userToUpdate = user.find((u) => u.id === id);

    if (firstName){
        userToUpdate.firstName = firstName;
    }
    if (lastName){
        userToUpdate.lastName = lastName;
    }
    if (age){
        userToUpdate.age = age;
    }

    res.send(`${userToUpdate.firstName} has been updated`);
})

export default router;