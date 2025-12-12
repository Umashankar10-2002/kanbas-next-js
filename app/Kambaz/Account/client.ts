import axios from "axios";

export const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const profile = async () => {
  const res = await axiosWithCredentials.post(`${HTTP_SERVER}/api/users/profile`);
  return res.data;
};

export const findAllUsers = async () => {
  const res = await axiosWithCredentials.get(`${HTTP_SERVER}/api/users`);
  return res.data;
};

export const deleteUser = async (userId: string) => {
  await axiosWithCredentials.delete(`${HTTP_SERVER}/api/users/${userId}`);
};

export const createUser = async (user: any) => {
    const res = await axiosWithCredentials.post(`${HTTP_SERVER}/api/users`, user);
    return res.data;
  };
  
  export const updateUser = async (userId: string, updates: any) => {
    const res = await axiosWithCredentials.put(`${HTTP_SERVER}/api/users/${userId}`, updates);
    return res.data;
  };
  
  export const findUserById = async (userId: string) => {
  const res = await axiosWithCredentials.get(`${HTTP_SERVER}/api/users/${userId}`);
  return res.data;
};
