import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes); //makes localhost:5000/users ka page =usersRoutes

app.get('/', (req, res)=>{
    console.log('testing!!'); //what we see in our terminal

    res.send('hiiii babygirl'); //what the browser shows(get's output page)
});

app.listen(PORT, () => 
{
    console.log(`Server running on port: http://localhost:${PORT}`)
});