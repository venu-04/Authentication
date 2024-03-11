import mongoose from  'mongoose';
const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kamsuvenu2004:l6vLBwIKAZ1TwF5M@cluster0.azgwbuu.mongodb.net/db?retryWrites=true&w=majority');
        console.log("connected to mongodb");
    } catch (error) {
        console.log(`Error connecting to MongoDB: `);
        console.log(error);
    }
};

export default connectToMongoDB;