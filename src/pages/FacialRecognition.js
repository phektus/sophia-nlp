import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

const FacialRecognition = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <Container>
                <Row>
                    <Col><h3>Facial Recognition</h3></Col>
                </Row>
                <Row>
                    <Col><input type="file" onChange={handleChange} /></Col>
                </Row>
                <Row>
                    <Col>
                        <img 
                            style={{
                                height: '200px',
                                widht: '100px',
                                paddingTop: '20px'
                            }}
                            src={file} 
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FacialRecognition;