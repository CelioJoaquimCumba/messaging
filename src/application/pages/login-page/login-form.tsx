import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { emailValidation, passwordValidation } from "../../../utils/validation/index.tsx"
import { WarningMessage } from "../../../utils/warning-labels/warningMessage.tsx"

export const LoginForm = () => {
    const [ firstSub, setFirstSub ] = useState(true)


    const validate = (e) =>{
        e.preventDefault()
        setFirstSub(false)
        setIsValidEmail(true)
        setIsValidPassword(true)
        let valid = true
        if( !emailValidation(email) ){
            setIsValidEmail(false)
            valid = false
        }
        if( !passwordValidation(password) ){
            setIsValidPassword(false)
            valid = false
        }
        if(!valid) return
    }
    // -------------------------------------------email----------------------------------------------//
    const [email, setEmail ] = useState("")
    const [ isValidEmail, setIsValidEmail] = useState(true)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    // -------------------------------------------password----------------------------------------------//
    const [password, setPassword ] = useState("")
    const [ isValidPassword, setIsValidPassword] = useState(true)

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return(
        <Container>
            <Form className="w-100" onSubmit={(e)=>validate(e)}>
                <Form.Group className="mb-3 w-100">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="celio.cumba@gmail.com" value={email} onChange={handleEmail} className={!isValidEmail ? "border-danger" : "" }/>
                    <WarningMessage isValid={isValidEmail} message="Invalid Email" firstSub={firstSub}/>
                </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="password" value={password} onChange={handlePassword} className={!isValidPassword ? "border-danger" : "" }  />
                        <WarningMessage isValid={isValidPassword} message="Invalid Password. Your password must be have at least 8 characters long 1 uppercase & 1 lowercase character 1 number" firstSub={firstSub}/>
                </Form.Group>
                <Button type="submit">Log in</Button>
            </Form>
        </Container>
    )
}