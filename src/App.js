import { Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import NLP from './pages/NLP';
import Translation from './pages/Translation';
import SpeechToText from './pages/SpeechToText';
import FacialRecognition from './pages/FacialRecognition';
import VideoAnalysis from './pages/VideoAnalysis';
import OCR from './pages/OCR';

function App() {
    return (        
        <>      
            <Container>               
                <Row>
                    <Col sm={2}>
                        <Navigation />         
                    </Col>
                    <Col sm={10}>
                        <Routes>                                   
                            <Route path='nlp' element={<NLP />}/>  
                            <Route path='translation' element={<Translation />}/>  
                            <Route path='speechtotext' element={<SpeechToText />}/>
                            <Route path='facialrecognition' element={<FacialRecognition />}/>
                            <Route path='videoanalysis' element={<VideoAnalysis />}/>
                            <Route path='ocr' element={<OCR />}/>                  
                            <Route path='/' element={<Home />}/>    
                        </Routes>  
                    </Col>
                </Row>
            </Container>                        
        </>
    );    
}

export default App;