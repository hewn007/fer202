import React, { createContext, useReducer, useContext } from "react";

// Initial state for the authentication context
const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Reducer function to manage authentication state
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload, isAuthenticated: true };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
}

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the application
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Simulated login function
  const login = async (identifier, password) => {
    dispatch({ type: "LOGIN_REQUEST" });
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (identifier === "admin" && password === "123456") {
          dispatch({ type: "LOGIN_SUCCESS", payload: { username: "admin", role: "admin" } });
          resolve({ ok: true });
        } else {
          dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
          resolve({ ok: false });
        }
      }, 1000);
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};