import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

export default () => (
    <Container>
        <Row>
            <Col><h3>Translate</h3></Col>
        </Row>
        <Row>
            <Col sm={4}>
                <DropdownButton title='Source' size='sm' variant='info'>
                    <Dropdown.Item>Auto-detect</Dropdown.Item>
                    <Dropdown.Item>English</Dropdown.Item>
                </DropdownButton>
                <br />
            </Col>
            <Col sm={4}>
                <DropdownButton title='Target' size='sm' variant='warning'>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>French</Dropdown.Item>
                </DropdownButton>
                <br />
            </Col>
        </Row>
        <Row>            
            <Col sm={4}>
                <textarea
                rows="10"
                cols="30"
                />
            </Col>
            <Col sm={4} >
                <textarea
                rows="10"
                cols="30"
                />
            </Col>
        </Row> 
        <Row>
            <Col>
                <br />
                <Button type="submit" variant="primary">Submit</Button>
                {' '}
                <Button type="reset" variant="outline-dark">Clear</Button>
            </Col>
        </Row>      
    </Container>
); 
