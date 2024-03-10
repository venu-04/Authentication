import Express from "express";
import dotenv from  'dotenv';
import authRoutes from  './routes/auth.routes.js';
import connectToMongoDB from "./db.js";

dotenv.config().parsed;
const app=Express();

const PORT = process.env.PORT||3001;




app.use("/api/auth",authRoutes)

// app.get("/",(req,res) => {
//     res.send("hello world");
// });


app.listen(PORT , ()=>{
     connectToMongoDB()
     console.log(process.env.PORT);
     console.log(dotenv.config());
     
    console.log(`Server is listening on port ${PORT}`);
})
