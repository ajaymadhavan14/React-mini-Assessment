import userModel from "../model/userDataSchema.js";

const registrationData = async (req, res, next) => {
  try {
    console.log(req.body);
    const { fullName, email, phoneNumber, message } = req.body;

    // Check if the user with the given email already exists
    const userExists = await userModel.findOne({ email: email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Create a new user
    const newUser = await userModel.create({
      fullName,
      email,
      phoneNumber,
      message,
    });

    if (newUser) {
      res
        .status(201)
        .json({ success: true, message: "Data saved successfully" });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Failed to create user" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while processing registration",
      });
  }
};

const getAllData = async (req, res, next) => {
  try {
    // Retrieve all user data from the database
    const allUserData = await userModel.find({});
    res.status(200).json(allUserData);
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while retrieving data",
      });
  }
};

export default { registrationData, getAllData };
