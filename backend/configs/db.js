import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => { console.log("Database connected successfully") })

        let mongodbURI = process.env.MONGODB_URI;
        await mongoose.connect(`${mongodbURI}`)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDB;