import User from "../models/user.js";
import bcrypt  from  "bcryptjs";
import gentoken from "../token.js";

export const signup= async(req,res) => {
    try {
        const { fullname , username, email, password, confirmpassword } = req.body;
        if(password !== confirmpassword){
            return res.status(400).json({error:"password dont match"})
    } 
    const user = await User.findOne({username}); 


    if(user){
        return res.status(400).json( { error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);

    // create a new user and save
    const newUser = new User({
        fullname,
        username,
        email,
        password:hashedpassword,
    })
     if(newUser){

        gentoken(newUser._id,res); // generate jwt token
        await newUser.save();

    res.status(201).json({
        message:'User created successfully',
        user_id: newUser.user_id,
        fullname:newUser.fullname,
        username:newUser.username,
        username:newUser.email
    });
    }else{
        res.status(400).json({error:"invalid user data"});

    }
    
    } catch (error) {
        console.log("error in signup controller",error.message);
        res.status(500).json({error:"server error"})
    }

   
   };



export const login = async(req,res) =>{
   try {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    
    // const salt = await bcrypt.genSalt(10);
    // const hashedpassword = await bcrypt.hash(user.password,salt);

    //  const ispassword = await bcrypt.compare(password,user.password || "")


    console.log(user)
    if(!user){
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

};



export const logout= (req,res) => {
    res.send("logout user")
};