import React from "react"
import { Button, Form } from "react-bootstrap"

export const ThirdForm = ():JSX.Element =>{
    return(
        <>
            <Form.Group className="mb-3 w-100">
                <Form.Label>Verification code</Form.Label>
                <Form.Control type="number" placeholder="000000" name="verificationCode" />
            </Form.Group>
            <Button type="submit">
                Submit
            </Button>
        </>
    )
}