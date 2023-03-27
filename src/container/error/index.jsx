import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ErrorContent from "../../components/error";
import { ErrorSection } from "./style";
const ErrorArea = () => {
    return (
        <ErrorSection>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <ErrorContent />
                    </Col>
                </Row>
            </Container>
        </ErrorSection>
    );
};

export default ErrorArea;
