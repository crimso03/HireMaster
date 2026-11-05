
import axios from "axios";

import auth from "../../Firebase/firebase.config";


const AxiosPublic = axios.create({
  baseURL: "https://hiremaster-server.vercel.app",
});

AxiosPublic.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();

      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
