import {v4 as uuidv4} from 'uuid';

let users = [];

export const createUser = (req, res) =>{
    const user = req.body; //req.body is the what we are inputting in the post thing's body

    users.push({...user, id: uuidv4()});
    //we are using uuid as it generates a unique id everytime for every user

    res.send(`user ${user.firstName} added to database`); //res is what we see on the post's output page
}

export const getUser = (req, res)=>
{
    res.send(users); //get page is the browser page, so this is what we see on the browser of 5000/users and on the output of get page
}

export const findUser = (req, res)=> { //the /:id means that anything we put after users/___ will come as id = req.params
    const { id } = req.params;

    const founduser = users.find((user) => user.id === id);

    res.send(founduser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user)  => user.id !== id) //for every user in which the user id is not equal to the id in the browser
    res.send(`user ${id} deleted`); //all the users selected in this will just get deleted from the database
    //the req is what we are putting after 5000/ when we get to delete page
}

export const editUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user)  => user.id !== id) //for every user in which the user id is not equal to the id in the browser
    res.send(`user ${id} deleted`); //all the users selected in this will just get deleted from the database
    //the req is what we are putting after 5000/ when we get to delete page
}