import Card from 'react-bootstrap/Card';
// "theme": "impressive body",
// "score": 1.64,
// "sentiment": 2

export default ({ 
    theme, 
}) => (
    <Card style={{ 
        height: 120,
        marginTop: 10 
    }}>
        <Card.Body>
            <Card.Title 
                className='text-truncate' 
                style={{maxWidth: 310}}
            >
                { theme.theme }
            </Card.Title>
            <Card.Text>               
                { (theme.score) &&
                    <>Score: { theme.score }<br /></>
                }
                { (theme.sentiment) &&
                    <>Sentiment: {theme.sentiment}<br/></>
                }
            </Card.Text>            
        </Card.Body>
    </Card>
);