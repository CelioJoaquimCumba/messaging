import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { emailValidation, passwordValidation, passwordEqual } from "../../../../utils/validation/index.tsx"
import { WarningMessage } from "../../../../utils/warning-labels/warningMessage.tsx"


export const FirstForm = (props):JSX.Element =>{
    const [ firstSub, setFirstSub ] = useState(true)
    const validate = () =>{
        setFirstSub(false)
        setIsValidEmail(true)
        setIsValidPasswordConfirmation(true)
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
        if( !passwordEqual(password, passwordConfirmation) ){
            setIsValidPasswordConfirmation(false)
            valid = false
        }
        if(!valid) return
        props.onValid('1')
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
    // -------------------------------------------password confirmation----------------------------------------------//
    const [passwordConfirmation, setpasswordConfirmation ] = useState("")
    const [ isValidPasswordConfirmation, setIsValidPasswordConfirmation] = useState(true)

    const handlepasswordConfirmation = (e) => {
        setpasswordConfirmation(e.target.value)
    }
    
    return(
        <>
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
            <Form.Group className="mb-3">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control name="passwordConfirmation" type="password" placeholder="password confirmation" value={passwordConfirmation} onChange={handlepasswordConfirmation} className={!isValidPasswordConfirmation ? "border-danger" : "" } />
                    <WarningMessage isValid={isValidPasswordConfirmation} message="Invalid Password confirmation. Passwords must match" firstSub={firstSub}/>
            </Form.Group>
            <Button onClick={()=>validate()}>
                Continue{props.step}
            </Button>
        </>
    )
}


