import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AddPost from './components/AddPost';
import ViewPosts from './components/ViewPosts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/addpost' element={<AddPost/>} />
        <Route path='/viewposts' element={<ViewPosts/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
