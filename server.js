const express= require('express');
const dotenv=require('dotenv').config();
const {errorhandle}=require('./middleware/errorMiddleware');
const {connectDb}=  require('./connect/dataabase')
const port=process.env.PORT||5000;

connectDb()
const app=express();
console.log('JWT_SECRET:', process.env.JWT_SECRET);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/tasks',require('./routes/taskRoutes'));
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorhandle)
app.listen(port,()=> console.log(`Runing on the port ${port}`));

