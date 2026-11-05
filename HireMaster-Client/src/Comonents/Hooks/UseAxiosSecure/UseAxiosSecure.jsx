import axios from "axios";


// const AxiosSecure = axios.create({
//     baseURL:'https://hiremaster-server.vercel.app'
// })
const AxiosSecure = axios.create({
    baseURL:'https://hiremaster-server.vercel.app'
})

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;
