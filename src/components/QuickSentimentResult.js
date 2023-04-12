import Table from 'react-bootstrap/Table';

const toPercentage = (v) => {
    return parseFloat(v * 100).toFixed(2) + " %";
}

export default ({ quickSentiment }) => (
    <>
        <h4>Summary</h4>
        <Table bordered>
            <tbody>
                <tr>
                    <th width={'30%'}>Score</th>
                    <td>{ toPercentage(quickSentiment.summary.score) }</td>
                </tr>
                <tr>
                    <th>Label</th>
                    <td>{ quickSentiment.summary.label }</td>
                </tr>
            </tbody>            
        </Table>
        <h4>Emotions</h4>
        <Table bordered>
            <tbody>
                <tr>
                    <th width={'30%'}>Sadness</th>
                    <td>{ toPercentage(quickSentiment.emotion.sadness) }</td>
                </tr>
                <tr>
                    <th>Joy</th>
                    <td>{ toPercentage(quickSentiment.emotion.joy) }</td>
                </tr>
                <tr>
                    <th>Fear</th>
                    <td>{ toPercentage(quickSentiment.emotion.fear) }</td>
                </tr>
                <tr>
                    <th>Disgust</th>
                    <td>{ toPercentage(quickSentiment.emotion.disgust) }</td>
                </tr>
                <tr>
                    <th>Anger</th>
                    <td>{ toPercentage(quickSentiment.emotion.anger) }</td>
                </tr>
            </tbody>
        </Table>
        <h4>Categories</h4>
        <Table bordered>
            <thead>
                <tr>
                    <th width='70%'>Hierarchy</th>
                    <th>Score</th>
                </tr>                
            </thead>
            <tbody>
                { quickSentiment.categories.map( (category) => (
                    <tr>
                        <td>{ category.label }</td>
                        <td>{ toPercentage(category.score) }</td>
                    </tr>
                ))}                                
            </tbody>            
        </Table>
    </>
);