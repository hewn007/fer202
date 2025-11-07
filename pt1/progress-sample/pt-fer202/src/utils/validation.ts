// filepath: pt-fer202/src/utils/validation.ts

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Password must be at least 6 characters long
};

export const validateForm = (email: string, password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (!validateEmail(email)) {
        errors.push("Invalid email format.");
    }
    
    if (!validatePassword(password)) {
        errors.push("Password must be at least 6 characters long.");
    }
    
    return {
        isValid: errors.length === 0,
        errors,
    };
};