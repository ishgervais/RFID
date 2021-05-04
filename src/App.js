// import logo from './logo.svg';
import './App.css';
import './style/main.css'
import { Dashboard } from './pages/Dashboard';
import {Route,Switch} from 'react-router-dom'
import { ReadCards } from './components/ReadCard';
import { RegisterCard } from './components/RegisterCard';
import { AddBalance } from './components/AddBalance';

function App() {
  return (
    <div className="App">

     <Dashboard>
       <Switch>
         <Route exact path="/view/cards">
        <ReadCards/>
       </Route>
       <Route exact path="/">
       <RegisterCard/>
       </Route>
       <Route exact path="/create/card">
        <RegisterCard/>
       </Route>
       <Route exact path="/balance/add">
        <AddBalance/>
       </Route>
        </Switch>
       </Dashboard>
    </div>
  );
}

export default App;
