import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

import profile from "../../../../resources/man.png";
export const Dev = ():JSX.Element =>{
    return(
        <Row className="d-flex justify-content-end border align-items-center pt-3 pb-3">
            <Card className="border-0 ">
                <Card.Body>
                    <Col className="p-2">
                        <Image src={profile} alt="profile" style={{width: '4rem'}}/>
                    </Col>
                    <Col className="p-2">
                                <Card.Title>
                                    <h3>Programmer</h3>
                                </Card.Title>
                                <Card.Text>
                                    Celio Joaquim Cumba
                                </Card.Text>
                    </Col>
                </Card.Body>
            </Card>
        </Row>
    )
}