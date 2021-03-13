import { Switch, Route } from 'react-router';
import './App.css';

//Import pages
import Home from './pages/Home'

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
