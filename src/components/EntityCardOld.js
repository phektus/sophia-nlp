import Card from 'react-bootstrap/Card';

export default ({ 
    entity, 
    showSalience=true, 
    showSentience=true 
}) => (
    <Card style={{ 
        height: showSentience ? 160 : 120,
        marginTop: 10 
    }}>
        <Card.Body>
        <Card.Title 
            className='text-truncate' 
            style={{maxWidth: 310}}
        >
            { entity.id } ) { entity.name }
        </Card.Title>
        <Card.Text style={{ 
            position: "absolute", 
            padding: 10,
            top: 0, 
            right: 0 
        }}>{ entity.type }</Card.Text>
        <Card.Text>
            { entity.link &&
                <>
                <a href={entity.link.url} target="_blank">{ entity.link.title }</a>
                <br />
                </>
            }
            { (showSalience && entity.salience) &&
                <>Salience: { entity.salience }<br /></>
            }
            { (showSentience && entity.sentiment) &&
                <>Score: {entity.sentiment.score}<br/>Magnitude: {entity.sentiment.magnitude}<br/></>
            }
        </Card.Text>            
        </Card.Body>
    </Card>
);