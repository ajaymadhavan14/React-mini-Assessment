import axios from "../axios/axios";

export const getAllData = async () => {
  try {
    const { data } = await axios.get("/alldata");
    return data;
  } catch (error) {
    console.log(error);
  }
};
