import Table from 'react-bootstrap/Table';

export default ({ topics }) => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width={'50%'}>Topic</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        { topics.map( (topic) => (
            <tr>            
                <td>{ topic.text }</td>
                <td>{ topic.relevance }</td>
            </tr>    
        ))}           
      </tbody>
    </Table>
);