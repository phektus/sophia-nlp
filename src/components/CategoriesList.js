import { Container, Row, Col } from 'react-bootstrap';

import CategoryCard from './CategoryCard';

export default ({ 
    categories
 }) => (
  <>
    <Container>
      { categories.reduce((pairs, category, index) => {
        if(index % 2 == 0) {
          pairs.push([category]);
        } else {
          pairs[pairs.length-1].push(category);
        }        
        return pairs;
      }, []).map( (pair) => (       
        <Row>     
          { pair.map( (category) => (
            <Col>
              <CategoryCard 
                category={category}
              />
            </Col>
          ))}                
        </Row>
      ))}      
    </Container>
  </>
);