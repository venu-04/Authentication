import express from "express";
// import dotenv from  'dotenv';
import authRoutes from  './routes/auth.routes.js';
import connectToMongoDB from "./db.js";

// dotenv.config().parsed;
const app=express();

// const PORT = process.env.PORT||3001;
const PORT = 3001;


app.use(express.json()); //middleware to parse incoming requests with json payloads
app.use("/api/auth",authRoutes)

// app.get("/",(req,res) => {
//     res.send("hello world");
// });


app.listen(PORT , ()=>{
    
    //  console.log(process.env.PORT);
    //  console.log(dotenv.config());
    connectToMongoDB();
    console.log(`Server is listening on port ${PORT}`);
})
 