import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputForm from '../components/InputForm';
import ResultsTab from '../components/ResultsTab';

function NLP() {
    const [results, setResults] = useState(null);

    return (
        <Container>
            <Row>
                <Col>
                    <InputForm setResults={setResults} />
                </Col>
            </Row>
            { results && 
                <Row>
                    <Col>                        
                        <ResultsTab results={results} />    
                    </Col>
                </Row>                
            }    
        </Container>
    ); 
}

export default NLP;