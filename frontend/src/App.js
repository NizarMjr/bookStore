import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SingleBook from './components/singleBook';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Content />} />
          <Route path='/book/:id' exact element={<SingleBook />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
