import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/home" component={Home} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;