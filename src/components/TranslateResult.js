import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import LanguageDropdown from './LanguageDropdown';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default ({ entities }) => {
    const [language, setLanguage] = useState(null);
    
    const handleSelect = (code, name) => {
        setLanguage({
            code: code,
            name: name
        });
    };

    const fillterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <>
            <Row>
                <Col sm={2}>
                    <LanguageDropdown setLanguage={setLanguage} onSelect={handleSelect} />
                    { language && 
                        <small>{language.name}</small>
                    }
                </Col>
                <Col sm={10}>
                    { language && 
                        <Alert variant='warning'>{fillterText}</Alert>
                    }
                </Col>                
            </Row>
            
        </>
    );
}
