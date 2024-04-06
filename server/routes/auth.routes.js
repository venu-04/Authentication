import express  from "express";
import User from "../models/User.js";
import bcrypt from  "bcryptjs";
import gentoken from "../token.js";


const router = express.Router();

router.post('/signup', async (req, res) => {
    
    const data = req.body;
    console.log(data);


    try {
        const { fullname, username, email, password, confirmpassword } = req.body;
       
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "passwords don't match" });
        }
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
       

        // Create a new user and save
        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedpassword,
        });

        if (newUser) {
            // Generate JWT token
            gentoken(newUser._id, res);
            await newUser.save();
            
            res.status(201).json('user created successfully');

            // Redirect to a success page or dashboard
            res.redirect('/login'); // Adjust the path as needed
        } else {
            res.status(400).json({ error: "invalid user data" });
        }
    }
    catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "server error" });
    }
    
    
});


router.post( '/login',async(req,res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
       
        const ispassword = await bcrypt.compare(password,user.password || "")
    
    
        console.log(user);
        if(!user || !ispassword){
            return res.status(400).json("invalid username and password")
        }
    
        //generate token
        gentoken(user._id,res);
    
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
        });
        
       } catch (error) {
        console.log("error in login controller",error.message);
        res.status(500).json({error:"server error"})
       }
});

router.post('/logout',(req,res) => {
    try {
        res.clearCookie("jwt token",{
       httpOnly:true,
       sameSite:'strict',
   });
       
   } catch (error) {
       console.log("error in logout controller",error.message);
       res.status(500).json({error:"server error"});   
   }
});

export default router;