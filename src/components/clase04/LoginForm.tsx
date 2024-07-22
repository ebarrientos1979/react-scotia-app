import React, { useState, useCallback } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const navigate = useNavigate();

    const clickForm = useCallback(() => {                
        axios.post('http://localhost:8089/api/v1/auth/signin', {
            email:username,
            password:password
        }).then(
            (res) => {
                if(res.data.token){
                    //navegar a la siguiente pagina
                    
                }
            }
        ).catch(
            (error) => {
                console.error(error);
                setMensaje("Email & Password incorrectos");
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
                        <br/>
                        {
                            mensaje &&
                            <Alert key="danger" variant="danger">
                                { mensaje }
                            </Alert>
                        }
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
