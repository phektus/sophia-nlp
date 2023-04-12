import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import MicControls from '../components/MicControls';

import { useState } from 'react';

const SpeechToText = () => {
    const [outputText, setOutputText] = useState('');

    return (
        <Container>
            <Row>
                <Col><h3>Speech to Text</h3></Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Text output"
                        className="mb-3"
                    >
                        <Form.Control 
                            as="textarea" 
                            placeholder="Text output will appear here" 
                            style={{ height: '200px' }}
                            value={outputText}
                            readOnly
                        />
                    </FloatingLabel>
                </Col>            
            </Row>
            <Row>            
                <Col>                
                    <MicControls setOutputText={setOutputText} />
                </Col>           
            </Row>            
        </Container>
    ); 
}

export default SpeechToText;