import Card from 'react-bootstrap/Card';
// {
//     "phrase": "blockbuster",
//     "score": 0.98
// }
export default ({ 
    sentiment, 
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
                { sentiment.phrase }
            </Card.Title>
            <Card.Text>
                { sentiment.score && <>Score: {sentiment.score}<br/></> }
            </Card.Text>            
        </Card.Body>
    </Card>
);