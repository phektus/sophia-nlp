import Card from 'react-bootstrap/Card';
// {
//      "topic": "Boats",
//      "score": 0.63
// }
export default ({ 
    category, 
}) => (
    <Card style={{ 
        height: 80,
        marginTop: 10 
    }}>
        <Card.Body>
            <Card.Title 
                className='text-truncate' 
                style={{maxWidth: 310}}
            >
                { category.topic }
            </Card.Title>
            <Card.Text>
                { category.score && <>Score: {category.score}<br/></> }
            </Card.Text>            
        </Card.Body>
    </Card>
);