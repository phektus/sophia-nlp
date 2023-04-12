import Table from 'react-bootstrap/Table';

export default ({ keywords }) => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width={'50%'}>Keyword</th>
          <th>Relevance</th>
        </tr>
      </thead>
      <tbody>
        { keywords.map( (keyword) => (
            <tr>            
                <td>{ keyword.text }</td>
                <td>{ keyword.relevance }</td>
            </tr>    
        ))}           
      </tbody>
    </Table>
);