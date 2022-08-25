import axios from "axios";

let baseURL;

const patharray = window.location.pathname.split("/");
export const schoolId = patharray[1];

if (process.env.NODE_ENV === "production") {
  baseURL = "https://api.educenty.com/v1";
} else {
  baseURL = "http://178.62.30.193:8000/v1";
}

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("educenty-user")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("educenty-user")).data.token.access
    }`;
  }

  if (schoolId) req.headers.school = schoolId;
  if (req.data?.url_name) req.headers.school = req?.data?.url_name;

  return req;
});

// export const fetchPost = (id) => API.get(`/user/posts/${id}`);
// export const fetchPosts = (page) => API.get(`/user/getposts?page=${page}`);
// export const fetchMyPosts = (page) => API.get(`/user/getmyposts?page=${page}`);
// export const createPost = (newPost) => API.post("/user/createpost", newPost);
// export const likePost = (id) => API.patch(`/user/post/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   API.patch(`/user/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/user/deletepost/${id}`);
// export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/users/auth/register/", formData);
export const signIn = (formData) => API.post("/users/auth/login/", formData);
export const studentUpload = (formData) => API.post("/students/", formData);
export const teacherUpload = (formData) => API.post("/users/", formData);
export const addSchoolDetails = (formData) => API.patch(`/schools/`, formData);
export const getSchoolDetails = () => API.get(`/schools/`);
export const addClasses = (formData) => API.post("/classes/", formData);
export const deleteClass = (id) => API.delete(`/classes/${id}/`);

export const addSession = (formData) => API.post("/sessions/", formData);
export const addSubjects = (formData) => API.post("/subjects/", formData);
export const deleteSubject = (id) => API.delete(`/subjects/${id}/`);
export const addGradeInstruction = (formData) =>
  API.post("/grade_structures/", formData);
export const deleteGrade = (id) => API.delete(`/grade_structures/${id}/`);

// export const forgotpassword = (email) =>
//   API.post("/user/forgotpassword", email);
// export const resetpassword = (formdata) =>
//   API.patch("/user/resetpassword", formdata);
// export const checklink = (token) => API.get(`/user/checklink/${token}`);
// export const profileUpdate = (formData) =>
//   API.patch(`/user/profileupdate`, formData);
// export const imageUpdate = (formData) =>
//   API.patch(`/user/profileimageupdate`, formData);
// export const uploadCv = (formData) => API.post(`/user/uploadcv`, formData);
// export const getCvFile = (id) => API.get(`/user/file/${id}`);
// export const reunionreg = (formData) => API.post(`/user/reunion`, formData);
