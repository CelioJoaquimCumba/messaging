import React, { useState } from "react"
import { Col, Form, Nav, Row, Tab } from "react-bootstrap"

import { FirstForm } from "./register-forms-groups/firstForm.tsx";
import { SecondForm } from "./register-forms-groups/secondForm.tsx";
import { ThirdForm } from "./register-forms-groups/thridForm.tsx";

export const RegisterForm = () => {
    const [steps, setSteps] = useState({
        '0': true,
        '1': false,
        '2': false,
    })
    const [step, setStep] = useState('0')
    const handleStep = (i: string) =>{
        switch (i){
            case '1': 
                setSteps({
                    '0': true,
                    '1': true,
                    '2': false,
                })
                break;
            case '2': 
                setSteps({
                    '0': false,
                    '1': false,
                    '2': true,
                })
                break;
            default: 
                break;
        }
        setStep(i)
        
    }

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="" activeKey={step}>
                <Row className="w-100">
                   
                    <Col sm={12}>
                    <Form action='/' method="post" onSubmit={e => { e.preventDefault()} } >
                        <Tab.Content>
                            <Tab.Pane eventKey="0">
                                    <FirstForm onValid={(value:string)=>handleStep(value)}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="1">
                                    <SecondForm onValid={(value:string)=>handleStep(value)}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                    <ThirdForm onValid={(value:string)=>handleStep(value)}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Form>
                    </Col>
                     <Col sm={12}>
                        <Nav variant="pills" className="flex-column" >
                            <hr/>
                            <Row>
                                <Col sm={3}>
                                    <Nav.Item >
                                        <Nav.Link eventKey="0" disabled={!steps['0']} onClick={()=>setStep('0')} >Firt Step</Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={3}>
                                    <Nav.Item >
                                        <Nav.Link eventKey="1" disabled={!steps['1']} onClick={()=>setStep('1')}>Secod Step</Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={3}>
                                    <Nav.Item >
                                    <Nav.Link eventKey="2" disabled={!steps['2']} onClick={()=>setStep('2')}>Confirmation</Nav.Link>
                                </Nav.Item>
                                </Col>
                            </Row>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </>

    );
}
                    