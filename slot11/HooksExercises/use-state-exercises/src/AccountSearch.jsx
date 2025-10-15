import React, { useState } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

const accounts = [
  { id: 1, username: 'alice', password: 'alice123', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, username: 'bob', password: 'bob456', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, username: 'charlie', password: 'charlie789', avatar: 'https://i.pravatar.cc/100?img=3' },
  { id: 4, username: 'david', password: 'david101', avatar: 'https://i.pravatar.cc/100?img=4' },
];

function AccountSearch() {
  const [search, setSearch] = useState('');
  const filteredAccounts = accounts.filter(acc =>
    acc.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h3 className="mb-4">Tìm kiếm Account theo Username</h3>
      <Form.Control
        type="text"
        placeholder="Nhập username để tìm kiếm..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4"
      />
      <Row>
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map(acc => (
            <Col md={4} lg={3} key={acc.id} className="mb-3">
              <Card>
                <Card.Img variant="top" src={acc.avatar} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '16px auto 0' }} />
                <Card.Body>
                  <Card.Title>{acc.username}</Card.Title>
                  <Card.Text>Password: {acc.password}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Card className="text-center p-4">
              <Card.Body>
                <Card.Text>Không tìm thấy kết quả</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default AccountSearch;
