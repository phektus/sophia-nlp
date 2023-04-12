import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import SentimentCard from './SentimentCard';

export default ({ 
    entity, 
}) => (
    <Card style={{ 
        height: 160 + ((entity.sentimentPhrases ? entity.sentimentPhrases.length : 0) * 20),
        marginTop: 10 
    }}>
        <Card.Body>
            <Card.Title 
                className='text-truncate' 
                style={{maxWidth: 310}}
            >
                { entity.name }
            </Card.Title>
            <Card.Text style={{ 
                position: "absolute", 
                padding: 10,
                top: 0, 
                right: 0 
            }}>{ entity.type }</Card.Text>
            <Card.Text>
                { entity.sentiment && <>Score: {entity.sentiment}<br/></> }
            </Card.Text>   
            
            <Table bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Phrase</th>
                        <th>Sentiment</th>
                    </tr>                    
                </thead>
                <body>
                { 
                    entity.sentiment && entity.sentimentPhrases.map((sentiment) => (
                        <tr>
                            <td>{sentiment.phrase}</td>
                            <td>{sentiment.score}</td>
                        </tr>
                    ))
                }
                </body>
            </Table>    
        </Card.Body>
    </Card>
);