import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import stickmanWithHeatBubble from "../../../../resources/sitckman-heart-bubble.png";
import videogameConsole from "../../../../resources/videogame.png";
export const ToJoin = ():JSX.Element =>{
    return(
        <Row className="d-flex justify-content-around border align-items-center pt-3 pb-3 ">
            <Col className="p-2">
                <Card className="border-0 ">
                    <Card.Body>
                        <Card.Title>
                            <h1>Be the first to join us</h1>
                        </Card.Title>
                        <Card.Img variant="top" src={stickmanWithHeatBubble} style={{width: '10rem'}}/>
                        <a href="./login"><Button variant="primary">Start messaging</Button></a>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="p-2">
                <Image src={videogameConsole} alt="videogame-console" style={{width: '20rem'}}/>
            </Col>
        </Row>
    )
}