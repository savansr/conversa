// Import the required modules
import mongoose from 'mongoose';

// Define the connection string for your local MongoDB instance


// Function to connect to the database
export const connectDB = async () => {
    try {
        // Connect to the MongoDB server
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

// Call the connectDB function
connectDB();
