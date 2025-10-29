// src/utils/validators.js
export const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value) => value.includes("@");

export const validateRequired = (value) => {
  return value.trim() !== "";
};

export const validateEmailFormat = (email) => {
  return emailRe.test(email);
};

export const validatePassword = (password) => {
  return password.trim() !== "";
};