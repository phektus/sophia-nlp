import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default ({ entities }) => {
    const [questionsList, setQuestionsList] = useState([]);    

    const handleSubmitQuestions = () => {
        // TODO: Fetch for answers
    }

    const handleAddClick = (e) => {
        setQuestionsList([
            ...questionsList,
            {
                text: ""
            },
        ])
    };

    const handleQuestionChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...questionsList];
        list[index]['text'] = value;
        setQuestionsList(list);
    }

    const handleRemoveQuestion = (index) => {
        const list = [...questionsList];
        list.splice(index, 1);
        setQuestionsList(list);
    }

    return (
        <>    
            <Form.Group className="mb-3" controlId="questionsControl">
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2">
                        <Button 
                            sm={2}
                            variant="outline-primary" 
                            onClick={handleAddClick}
                        >
                            Add a Question
                        </Button>
                    </ButtonGroup>                                   
                    {
                        questionsList.length > 0 &&   
                            <ButtonGroup className="me-2">                          
                                <Button 
                                    sm={2}
                                    variant="primary" 
                                    onClick={handleSubmitQuestions}
                                >
                                    Fetch Answers
                                </Button>
                            </ButtonGroup>    
                    }             
                </ButtonToolbar> 
            </Form.Group>                    
            <Form>         
                {questionsList.map((question, i) => (
                    <Form.Group className="mb-3" controlId="{i}" as={Row}>
                        <Form.Label column sm={1}>{i+1}</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                sm={8}
                                type="text" 
                                placeholder="Ask something about the text above" 
                                value={question.text} 
                                onChange={e => { handleQuestionChange(e, i)}}
                            />   
                        </Col>  
                        <Col sm={1}>
                            <Button 
                                variant="danger" 
                                onClick={() => handleRemoveQuestion(i)}
                            >
                                Remove
                            </Button>  
                        </Col>                                                                 
                    </Form.Group>
                ))}   
            </Form>
                     
        </>
    );
}
