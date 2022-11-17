import React from "react"
import { Button, Form } from "react-bootstrap"

export const SecondForm = (props):JSX.Element =>{
        const validate = () =>{
        props.onValid('2')
    }
    return(
        <>
            <Form.Group className="mb-3 w-100">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" placeholder="" />
            </Form.Group>

            <Button onClick={()=> validate()}>
                Continue
            </Button>
        </>
    )
}