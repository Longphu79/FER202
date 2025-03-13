import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Container } from 'react-bootstrap';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app */}
      <div className="App">
        <h1>React Router</h1>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Post />} /> {/* Trang danh sách bài viết */}
            <Route path="/post/:id" element={<PostDetail />} /> {/* Trang chi tiết bài viết */}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
