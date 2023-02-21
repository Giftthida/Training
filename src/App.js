import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Course from './pages/Course';
import Footer from './pages/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
