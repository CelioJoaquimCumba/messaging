import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { phoneNumberValidation } from "../../../../utils/validation/index.tsx"
import { WarningMessage } from "../../../../utils/warning-labels/warningMessage.tsx"

export const SecondForm = (props):JSX.Element =>{
    const [ firstSub, setFirstSub ] = useState(true)
    const validate = () =>{
        setFirstSub(false)
        setIsValidPhoneNumber(true)
        let valid = true
        if( !phoneNumberValidation(phoneNumber) ){
            setIsValidPhoneNumber(false)
            valid = false
        }
        if(!valid) return
        props.onValid('2')
    }
    // -------------------------------------------phoneNumber----------------------------------------------//
    const [phoneNumber, setphoneNumber ] = useState("")
    const [ isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)

    const handlephoneNumber = (e) => {
        setphoneNumber(e.target.value)
    }

    return(
        <>
            <Form.Group className="mb-3 w-100">
                <Form.Label>Phone number</Form.Label>
                <Form.Control  isValid={false}  type="number" placeholder="" name="phoneNumber" value={phoneNumber} onChange={handlephoneNumber} className={!isValidPhoneNumber ? "border-danger" : "" } />
                <WarningMessage isValid={isValidPhoneNumber} message="Invalid phone Number" firstSub={firstSub}/>
            </Form.Group>

            <Button onClick={()=> validate()}>
                Continue
            </Button>
        </>
    )
}