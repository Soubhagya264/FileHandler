import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './Components/shared/Navigation/Nav';

function App() {
  return (
    <>
     <Router>
     <Nav/>
      <Routes>
        <Route>   
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
