// app/Kambaz/Account/client.ts
import axios from "axios";

export const HTTP_SERVER = "http://localhost:4000";
export const USERS_API = `${HTTP_SERVER}/api/users`;
export const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const CURRENT_USER_COURSES_API = `${HTTP_SERVER}/api/users/current/courses`;

export const signin = async (credentials: any) => {
  const response = await axios.post(
    `${USERS_API}/signin`,
    credentials,
    { withCredentials: true }
  );
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axios.post(
    `${USERS_API}/signup`,
    user,
    { withCredentials: true }
  );
  return response.data;
};

export const signout = async () => {
  await axios.post(
    `${USERS_API}/signout`,
    {},
    { withCredentials: true }
  );
};

export const profile = async () => {
  const response = await axios.post(
    `${USERS_API}/profile`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const updateProfile = async (user: any) => {
  const response = await axios.put(
    `${USERS_API}/profile`,
    user,
    { withCredentials: true }
  );
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(
    `${USERS_API}/${user._id}`,
    user,
    { withCredentials: true }
  );
  return response.data;
};

// Retrieve courses for the currently signed-in user
export const fetchMyCourses = async () => {
  const response = await axios.get(CURRENT_USER_COURSES_API, {
    withCredentials: true,
  });
  return response.data;
};

// Create a new course for the current user (and enroll them)
export const createCourseOnServer = async (course: any) => {
  const response = await axios.post(CURRENT_USER_COURSES_API, course, {
    withCredentials: true,
  });
  return response.data; // the created course with id
};

// Delete a course by id
export const deleteCourseOnServer = async (courseId: string) => {
  await axios.delete(`${COURSES_API}/${courseId}`, {
    withCredentials: true,
  });
};

// Update a course by id
export const updateCourseOnServer = async (course: any) => {
  await axios.put(`${COURSES_API}/${course.id}`, course, {
    withCredentials: true,
  });
};