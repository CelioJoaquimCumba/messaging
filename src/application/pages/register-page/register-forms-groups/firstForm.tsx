import React from "react"
import { Button, Form } from "react-bootstrap"

export const FirstForm = (props):JSX.Element =>{
    const validate = () =>{
        props.onValid('1')
    }
    return(
        <>
            <Form.Group className="mb-3 w-100">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="celio.cumba@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Button onClick={()=>validate()}>
                Continue{props.step}
            </Button>
        </>
    )
}