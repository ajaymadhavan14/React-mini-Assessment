import userModel from "../model/userDataSchema.js";

const registrationData = async (req, res, next) => {
    try {
        const { fullName, email, phoneNumber, message } = req.body;
        await userModel.create({
            fullName,
            email,
            phoneNumber,
            message,
        });
        res.status(201).json({ status: "success", message: "Data saved" });
    } catch (error) {
        next(error);
    }
};

const getAllData = async (req, res, next) => {
    try {
        const data = await userModel.find({});
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

export default { registrationData, getAllData };
