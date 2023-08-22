import userModel from "../model/userDataSchema.js";

const registrationData = async (req, res, next) => {
    try {
       
        const { fullName, email, phoneNumber, message } = req.body;
        const exist = await userModel.findOne({email:email})
        if(exist) {
          return  res.json({ success:false, message: "Email already exist" }); 
        }
      const user =  await userModel.create({
            fullName,
            email,
            phoneNumber,
            message,
        });
        if(user) {

            res.status(201).json({ success:true, message: "Data saved" }); 
        }else {
            res.json({ success:false, message: "User not found" }); 

        }
    } catch (error) {
        res.json({ success:false, message: "error occured in registraction data controller" }); 
        
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
