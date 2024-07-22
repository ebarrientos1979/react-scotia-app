import React, { useState, useCallback } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const clickForm = useCallback(() => {                
        axios.post('http://localhost:8089/api/v1/auth/signin', {
            email:username,
            password:password
        }).then(
            (data) => {
                console.log(data);
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        );
    }, [username, password, navigate]);

    const cambioPassword = (evento:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(evento.target.value);
    };

    const cambioUsuario = (evento:React.ChangeEvent<HTMLInputElement>) =>{                
        setUsername(evento.target.value);        
    };

    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h2 className="text-center">Inicio de Sesión</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={cambioUsuario}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={cambioPassword}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={clickForm} className="w-100">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
