import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import background from '../../../resources/login.svg'
import { LoginForm } from "./login-form.tsx";
export const Login = () :JSX.Element=>{
    return(
        <>
            <Row className="d-flex border justify-content-center align-items-center pt-3 pb-3">
                <Col xs={12} md={6} >
                    <Image fluid src={background} alt="background" className="w-75"/>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <LoginForm/>
                </Col>
            </Row>
        </>
    )
}