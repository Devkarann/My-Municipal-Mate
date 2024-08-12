import axios from "axios";

const API_URL = "http://localhost:8081/api";

// Get the JWT token from local storage
const getAuthToken = () => localStorage.getItem("authToken");

const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const MyMunicipalService = {
  signIn: (usernameOrEmail, password) =>
    axios.post(`${API_URL}/auth/signin`, { usernameOrEmail, password }),

  registerUser: (user) => axios.post(`${API_URL}/auth/signup`, user),

  forgotPassword: (forgotPasswordDTO) =>
    axios.post(`${API_URL}/auth/forgotpassword`, null, {
      params: forgotPasswordDTO,
    }),

  verifyOtp: (verifyOtpDTO) =>
    axios.post(`${API_URL}/auth/verify-otp`, verifyOtpDTO),

  adminSignIn: (usernameOrEmail, password) =>
    axios.post(`${API_URL}/auth/admin/signin`, { usernameOrEmail, password }),

  
};

export default MyMunicipalService;
