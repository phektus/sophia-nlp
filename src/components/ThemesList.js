import { Container, Row, Col } from 'react-bootstrap';

import ThemeCard from './ThemeCard';

export default ({ 
    themes
 }) => (
  <>
    <Container>
      { themes.reduce((pairs, theme, index) => {
        if(index % 2 == 0) {
          pairs.push([theme]);
        } else {
          pairs[pairs.length-1].push(theme);
        }        
        return pairs;
      }, []).map( (pair) => (       
        <Row>     
          { pair.map( (theme) => (
            <Col>
              <ThemeCard 
                theme={theme}
              />
            </Col>
          ))}                
        </Row>
      ))}      
    </Container>
  </>
);