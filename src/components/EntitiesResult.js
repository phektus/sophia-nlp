import Alert from 'react-bootstrap/Alert';
import 'react-tabs/style/react-tabs.css';

import EntitiesList from './EntitiesList';

export default ({ entities }) => (
  <>
    <EntitiesList
      entities={entities}
    />
  </>
)
