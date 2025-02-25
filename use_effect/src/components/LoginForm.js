import React, { useState, useEffect, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  // Hàm kiểm tra email hợp lệ
  const validateEmail = useCallback((value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Email không hợp lệ.";
  }, []);

  // Hàm kiểm tra mật khẩu hợp lệ
  const validatePassword = useCallback((value) => {
    return value.length >= 8 ? "" : "Mật khẩu phải có ít nhất 8 ký tự.";
  }, []);

  // Xác thực email và mật khẩu khi thay đổi
  useEffect(() => {
    setErrors({
      email: touched.email ? validateEmail(email) : "",
      password: touched.password ? validatePassword(password) : "",
    });
  }, [email, password, touched, validateEmail, validatePassword]);

  // Kiểm tra toàn bộ form hợp lệ hay không
  useEffect(() => {
    setIsFormValid(errors.email === "" && errors.password === "" && email !== "" && password !== "");
  }, [errors, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form hợp lệ! Đang gửi dữ liệu...");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ maxWidth: "400px", margin: "auto", background: "#fff" }}>
      <h3 className="text-center mb-4">Đăng nhập</h3>

      {/* Email Field */}
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          isInvalid={touched.email && errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      {/* Password Field */}
      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          isInvalid={touched.password && errors.password}
        />
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="mt-4 w-100" disabled={!isFormValid}>
        Đăng nhập
      </Button>
    </Form>
  );
};

export default LoginForm;
