import userModel from "../model/userDataSchema.js";

const registrationData = async (req, res, next) => {
  const { fullName, email, phoneNumber, message } = req.body;
  await userModel.create({
    fullName,
    email,
    phoneNumber,
    message,
  });
  res.json({ status: "success", message: "Data saved" });
};

const allDataGet = async(req,res,next)=>{
   const data = await userModel.find({})
   console.log(data);
}
allDataGet()

export default { registrationData };
