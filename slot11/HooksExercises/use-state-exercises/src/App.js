import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CounterComponent from './CounterComponent.jsx';
import LightSwitch from './LightSwitch.jsx';
import LoginForm from './LoginForm.jsx';
import LoginForm2 from './LoginForm2.jsx';
import SearchItem from './SearchItem.jsx';
import AccountSearch from './AccountSearch.jsx';
import RegistrationForm from './RegistrationForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React useState Exercises</h2>
      </header>
      <div style={{ padding: '20px' }}>
        <h3>Exercise 1: Counter</h3>
        <CounterComponent />
        <h3>Exercise 2: Light Switch</h3>
        <LightSwitch />
        <h3>Exercise 3: Login Form</h3>
        <LoginForm />
        <h3>Exercise 4: Login Form 2 (Object State)</h3>
        <LoginForm2 />
        <h3>Exercise 5: Search Item</h3>
        <SearchItem />
        <h3>Exercise 6: Account Search</h3>
        <AccountSearch />
        <h3>Exercise 7: Registration Form</h3>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
