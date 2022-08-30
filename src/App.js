import './App.css';
import ChangeText from './components/ChangeText/ChangeText';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Alex" age={22}/>
        <ChangeText/>
        <ChangeText/>
      </header>
    </div>
  );
}

export default App;
