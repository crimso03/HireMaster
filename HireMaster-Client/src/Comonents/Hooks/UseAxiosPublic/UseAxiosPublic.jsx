import axios from "axios";

// const AxiosPublic = axios.create({
//   baseURL: "https://hiremaster-server.vercel.app",
// });
const AxiosPublic = axios.create({
  baseURL:'https://hiremaster-server.vercel.app'
})

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
