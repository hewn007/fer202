# React Authentication App

This project is a simple React application that implements user authentication using context and hooks. It features a login form with real-time validation, loading states, error handling, and a confirmation modal for successful logins.

## Project Structure

```
react-auth-app
├── public
│   └── index.html
├── src
│   ├── index.jsx
│   ├── App.jsx
│   ├── contexts
│   │   └── AuthContext.jsx
│   ├── components
│   │   ├── LoginForm.jsx
│   │   ├── ConfirmModal.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── LoginPage.jsx
│   ├── hooks
│   │   └── useAuth.js
│   ├── utils
│   │   └── validators.js
│   └── styles
│       └── App.css
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Authentication Context**: Manages user authentication state and provides login/logout functionality.
- **Login Form**: Includes real-time validation for username/email and password fields.
- **Loading States**: Displays loading indicators during authentication processes.
- **Error Handling**: Shows error messages for invalid login attempts.
- **Confirmation Modal**: Displays a modal upon successful login to confirm the action.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-auth-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

- Navigate to the login page to enter your credentials.
- Use the demo accounts provided in the login form for testing:
  - Admin: `admin` / `123456`
  - User: `user1` / `123456` (access denied)
  - Locked: `user2` / `123456` (locked account)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.