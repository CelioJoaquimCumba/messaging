import React from "react"
import { Button, Form } from "react-bootstrap"

export const LoginForm = () => {
    return(
        <Form className="w-75">
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="celio.cumba@gmail.com"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
            </Form.Group>
            <Button type="submit">Log in</Button>
        </Form>
    )
}