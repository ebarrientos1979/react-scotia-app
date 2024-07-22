import React, { useState, useCallback } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const clickForm = useCallback(() => {
       
    }, [navigate]);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h2 className="text-center">Inicio de Sesión</h2>
                    <Form onSubmit={clickForm}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
