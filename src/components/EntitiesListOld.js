import { Container, Row, Col } from 'react-bootstrap';

import EntityCard from './EntityCard';

export default ({ 
    entities, 
    showSalience=true, 
    showSentience=true
 }) => (
  <>
    <Container>
      { entities.items.reduce((pairs, entity, index) => {
        if(index % 2 == 0) {
          pairs.push([entity]);
        } else {
          pairs[pairs.length-1].push(entity);
        }        
        return pairs;
      }, []).map( (pair) => (       
        <Row>     
          { pair.map( (entity) => (
            <Col>
              <EntityCard 
                entity={entity}
                showSalience={showSalience}
                showSentience={showSentience} 
              />
            </Col>
          ))}                
        </Row>
      ))}      
    </Container>
  </>
);