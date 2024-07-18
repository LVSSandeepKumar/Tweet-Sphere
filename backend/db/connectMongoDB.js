import mongoose from "mongoose";

const connectMongoDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Error connecting to MongoDB :- ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;