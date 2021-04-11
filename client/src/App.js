import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
