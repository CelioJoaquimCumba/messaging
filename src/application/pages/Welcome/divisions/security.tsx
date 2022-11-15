import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import dataProtection from "../../../../resources/data-protection.png";
export const Security = ():JSX.Element =>{
    return(
        <Row className="d-flex justify-content-around border align-items-center pt-3 pb-3">
            <Col className="p-2">
                <Card className="border-0 ">
                    <Card.Body>
                        <Card.Title>
                            <h1>Security</h1>
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="p-2">
                <Image src={dataProtection} alt="data-protection" style={{width: '20rem'}}/>
            </Col>
        </Row>
    )
}