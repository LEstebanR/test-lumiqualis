import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
