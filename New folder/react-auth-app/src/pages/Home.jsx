import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center mb-0">Welcome to the Home Page</h3>
            </Card.Header>
            <Card.Body>
              <h5>Hello, {user?.username || "Guest"}!</h5>
              <p>
                This is a protected route. You can access this page because you are logged in.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;