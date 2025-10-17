import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './components/CounterComponent';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <div className="container">
          <h1>useReducer Exercises</h1>
          <CounterComponent />
          <QuestionBank />
        </div>
      </header>
    </div>
  );
}

export default App;
