import axios from "axios";
axios.defaults.withCredentials = true;


export const HTTP_SERVER = "http://localhost:4000";
export const USERS_API = `${HTTP_SERVER}/api/users`;
export const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const CURRENT_USER_COURSES_API = `${HTTP_SERVER}/api/users/current/courses`;
export const MODULES_API = `${HTTP_SERVER}/api/modules`;
export const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;


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

export const getAllCourses = async () => {
  const response = await axios.get(`${HTTP_SERVER}/api/courses`, {
    withCredentials: true,
  });

  // Normalize: always have an `id` field (fallback to `_id` if needed)
  return response.data.map((c: any) => ({
    ...c,
    id: c.id ?? c._id,
  }));
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
  const response = await axios.put(`${COURSES_API}/${course.id}`, course, {
    withCredentials: true,
  });
  return response.data;
};

// Find modules for a course
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/modules`,
    { withCredentials: true }
  );
  return response.data;
};

// Create module for a course
export const createModuleForCourse = async (
  courseId: string,
  module: any
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module,
    { withCredentials: true }
  );
  return response.data;
};

// Delete module
export const deleteModule = async (moduleId: string) => {
  const { data } = await axios.delete(
    `${MODULES_API}/${moduleId}`,
    { withCredentials: true }
  );
  return data;
};

// Update module
export const updateModule = async (module: any) => {
  const { data } = await axios.put(
    `${MODULES_API}/${module._id}`,
    module,
    { withCredentials: true }
  );
  return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/assignments`,
    { withCredentials: true }
  );
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment,
    { withCredentials: true }
  );
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
    { withCredentials: true }
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axios.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    { withCredentials: true }
  );
};

export const enrollInCourse = async (courseId: string) => {
  const res = await axios.post(
    `${HTTP_SERVER}/api/users/current/courses/${courseId}/enroll`,
    {},
    { withCredentials: true }
  );
  return res.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  await axios.delete(
    `${HTTP_SERVER}/api/users/current/courses/${courseId}/unenroll`,
    { withCredentials: true }
  );
};

export const findMyEnrollments = async () => {
  const res = await axios.get(
    `${HTTP_SERVER}/api/users/current/enrollments`,
    { withCredentials: true }
  );
  return res.data;
};
