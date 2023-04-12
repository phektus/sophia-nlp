import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <> 
            <Navbar fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <strong>Sophia</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'  className='justify-content-end'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/'>About</Nav.Link>
                            <Nav.Link href='/'>Contact Us</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar variant='light'>
                <Nav className='flex-column'>
                    <Nav.Link  eventKey='nlp' href='nlp'>NLP</Nav.Link>
                    <Nav.Link  eventKey='speechtotext' href='speechtotext'>Speech to Text</Nav.Link>
                    <Nav.Link  eventKey='facialrecognition' href='facialrecognition'>Facial Recognition</Nav.Link>
                    <Nav.Link  eventKey='videoanalysis' href='videoanalysis'>Video Analysis</Nav.Link>
                    <Nav.Link  eventKey='ocr' href='ocr'>OCR</Nav.Link>     
                </Nav>  
            </Navbar>
                              
        </>
    );
}

export default Navigation;