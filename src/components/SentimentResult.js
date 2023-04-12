import Table from 'react-bootstrap/Table';
import 'react-tabs/style/react-tabs.css';

import EntitiesList from './EntitiesList';

export default ({ entities, sentiment }) => (
  <>
    <Table bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th width="70%">Source</th>
          <th><center>Score</center></th>
          <th><center>Magnitude</center></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Whole page</td>
          <td align='center'>{ sentiment.page.score }</td>
          <td align='center'>{ sentiment.page.magnitude }</td>
        </tr>
        { sentiment.snippets.map( (snippet) => (
          <tr>
            <td>{ snippet.text }</td>
            <td align='center'>{ snippet.score }</td>
            <td align='center'>{ snippet.magnitude }</td>
          </tr>
         ))}
      </tbody>
    </Table>
    
    <EntitiesList
      entities={entities}
      showSalience={false}
    />
  </>
);
