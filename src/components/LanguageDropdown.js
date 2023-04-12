import { Dropdown, DropdownButton } from 'react-bootstrap';

export default ({ onSelect }) => {
    const languages = {
        "en": "English",
        "sq": "shqiptar",
        "ar": "العربية",
        "bn": "বাংলা",
        "ch": "中文",
        "nl": "Nederlandse",        
        "fr": "Français",
        "de": "German",
        "gr": "ελληνική",
        "gu": "Avañe'ẽ",
        "hi": "हिंदुस्तानी",
        "it": "Italiano",
        "ko": "한국어",
        "ms": "Melayu",
        "fa": "پارسی",
        "pt": "Português",
        "ro": "Română",
        "ru": "русский",
        "sr": "Српско-хрватски",
        "es": "Español",
        "sw": "Kiswahili",
        "sv": "Swedish",
        "ta": "தமிழ்",
        "tr": "Türk"
      };

    const handleSelect = (code) => {
        onSelect(code, languages[code]);
    }

    return (
        <>
            <DropdownButton 
                onSelect={handleSelect} 
                title='Select Language' 
                size='sm'
            >
                { Object.keys(languages).map((code) => (
                    <Dropdown.Item eventKey={code}>{languages[code]}</Dropdown.Item>
                ))}                
            </DropdownButton>
        </>
    );
}