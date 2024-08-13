import {jwtDecode} from "jwt-decode"; // Correct import statement

const TOKEN_KEY = "authToken";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUsername = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub; // Ensure this matches the field used in the Java backend
  } catch (error) {
    return null;
  }
};

