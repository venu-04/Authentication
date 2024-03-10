import mongoose from  'mongoose';
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to mongodb")
    } catch (error) {
        console.log(`Error connecting to MongoDB: `);
        console.log(error);
    }
};

export default connectToMongoDB;