import jwt from  'jsonwebtoken';
//ILkOAVrr6rGHgeNqipvcPuTuc0s3zSgEcKbZ9luQau8=
const gentoken = (userId,res) => {
    const token = jwt.sign({userId},"ILkOAVrr6rGHgeNqipvcPuTuc0s3zSgEcKbZ9luQau8=",{
    expiresIn: "5h", //expires in 5 hours
})

res.cookie("jwt token",token,{
    httpOnly : true,
    sameSite:"strict",
});
}

export default gentoken;
