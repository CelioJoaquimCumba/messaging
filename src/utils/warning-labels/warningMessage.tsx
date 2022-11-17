import { Form } from "react-bootstrap"
import React from "react"

export const WarningMessage = (props,): JSX.Element => {
    return(
        <Form.Label hidden={ props.isValid || props.firstSub } className="text-danger">{props.message}</Form.Label>
    )
}