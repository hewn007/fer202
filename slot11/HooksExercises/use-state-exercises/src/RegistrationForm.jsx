import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Modal, Toast } from 'react-bootstrap';

function validateUsername(username) {
  return /^[A-Za-z0-9_.]{3,}$/.test(username.trim());
}
function validateEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
}

function RegistrationForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'username') {
      if (!validateUsername(value)) error = 'Username ≥ 3 ký tự, chỉ chữ, số, _ hoặc .';
    } else if (name === 'email') {
      if (!validateEmail(value)) error = 'Email không hợp lệ';
    } else if (name === 'password') {
      if (!validatePassword(value)) error = 'Password ≥ 8 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt';
    } else if (name === 'confirm') {
      if (value !== form.password) error = 'Confirm phải khớp password';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    if (!validateUsername(form.username)) newErrors.username = 'Username ≥ 3 ký tự, chỉ chữ, số, _ hoặc .';
    if (!validateEmail(form.email)) newErrors.email = 'Email không hợp lệ';
    if (!validatePassword(form.password)) newErrors.password = 'Password ≥ 8 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt';
    if (form.confirm !== form.password) newErrors.confirm = 'Confirm phải khớp password';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    setForm({ username: '', email: '', password: '', confirm: '' });
    setErrors({});
    setShowToast(false);
    setShowModal(false);
  };

  const isFormValid =
    validateUsername(form.username) &&
    validateEmail(form.email) &&
    validatePassword(form.password) &&
    form.confirm === form.password;

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={7}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Đăng ký tài khoản</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    placeholder="Username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="confirm" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    isInvalid={!!errors.confirm}
                    placeholder="Confirm Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirm}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" type="button" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" disabled={!isFormValid}>
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        style={{ position: 'fixed', top: 20, right: 20, minWidth: 200 }}
      >
        <Toast.Header>
          <strong className="me-auto">Thông báo</strong>
        </Toast.Header>
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>
      <Modal show={showModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Title>{form.username}</Card.Title>
              <Card.Text>Email: {form.email}</Card.Text>
              <Card.Text>Password: {form.password}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegistrationForm;
