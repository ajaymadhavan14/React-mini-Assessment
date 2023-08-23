import { Schema, model } from "mongoose";

const user = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      required: true,
      type: Number,
      trim: true,
    },
    message: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default model("userDatas", user);
