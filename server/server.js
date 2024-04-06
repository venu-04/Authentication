import express from "express";
import authRoutes from  './routes/auth.routes.js';
import connectToMongoDB from "./db.js";
import cors from  "cors";

// dotenv.config().parsed;
const app=express();


// const PORT = process.env.PORT||3001;
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true  // Include credentials in CORS requests
  }));app.use(express.json()); //middleware to parse incoming requests with json payloads
app.use(express.urlencoded({ extended: true }));
app.use("/",authRoutes);

// app.get("/",(req,res) => {
//     res.send("hello world");
// });



app.listen(PORT , ()=>{
    
    //  console.log(process.env.PORT);
    //  console.log(dotenv.config());
    connectToMongoDB();
    console.log(`Server is listening on port ${PORT}`);
})
 