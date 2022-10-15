import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './Components/shared/Navigation/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import ViewFiles from './pages/ViewFiles/ViewFiles';
import Modal from './Components/shared/Modal/Modal';


function App() {
  return (
    <>
     <Router>
     <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/files" element={<ViewFiles />} />
        <Route path="/modal" element={<Modal />} />
        
      </Routes>
     </Router>
    </>
  );
}

export default App;
