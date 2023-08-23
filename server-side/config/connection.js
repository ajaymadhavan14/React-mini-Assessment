import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  // Disable strict query mode to allow more flexible queries
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connection successful
    console.log("Connected to the database successfully.");
  } catch (error) {
    // Connection error
    console.error("Error connecting to the database:", error.message);
  }
};

export default connectDb;
