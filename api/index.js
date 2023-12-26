import axios from "axios";
const baseUrl = "http://localhost:3000/api";
const getStudents = () => {
  try {
    const res = axios.get(`${baseUrl}/students`);
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};

export { getStudents };
