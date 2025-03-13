import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake user login (thay bằng API thực tế nếu cần)
    const validUser = {
      email: 'admin@gmail.com',
      password: 'password123'
    };

    if (email === validUser.email && password === validUser.password) {
      setError('');
      navigate('/posts'); // Chuyển hướng sau khi đăng nhập thành công
    } else {
      setError('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
};

export default Login;