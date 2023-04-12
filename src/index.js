import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App/>
    </Router>
);
