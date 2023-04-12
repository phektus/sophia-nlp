import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function InputForm({ setResults, }) {
  const defaultCorpus ="They need to push a 1,500kg wooden ship through sand and up a ramp, but the ship won't budge. Jang knows her team is the weakest on paper. Then, to the tune of her rallying cries, the boat begins to inch forward. Over the next eight minutes, her team, grunting and crying, manages to drag it up the ramp to complete the task. Stunned, the contestants crumple to the floor, their ripped bodies soaked in sweat. If you haven't been watching this show, this is my favourite moment from Netflix's latest blockbuster - Physical 100. The survival show brings together 100 of South Korea's best athletes, from all backgrounds, to compete for the title of most impressive body. There are Olympians, fitness influencers, a firefighter, and a prison guard. One of the show's most refreshing features is that men and women compete together.";
  const initialState = {
    text: defaultCorpus,
    file: null,
    inputFileKey: Math.random().toString(36),
  };
  const [state, setState] = useState(initialState);

  function fetchResults() {
    if(state.file) {}

    fetch("http://cyber-nlp-fusion-en-microservice.cyber.svc.cluster.local/nlp" , {
      method: 'POST',
      body: JSON.stringify({
        text: state.text,
        title: "string" ,
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        console.log(jsonData);
        setResults(jsonData);
      })
      .catch((error) => {
        console.error(error)
      });
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      fetchResults();
  }

  const handleTextChange = (event) => {
    setState({
      text: event.target.value
    });
  }

  const handleFileChange = (event) => {
    if (event.target.files) {
      setState({
        file: event.target.files[0]
      });
    }
  }

  const handleReset = (event) => {
    event.preventDefault();
    event.target.reset();
    setState(initialState);
    setResults(null);
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Tabs>
          <TabList>
            <Tab>Raw Text</Tab>
            <Tab>Upload File</Tab>
          </TabList>
          <TabPanel>
            <textarea
              name="inputText"
              rows="10"
              cols="100"
              value={state.text}
              onChange={handleTextChange}
            />
          </TabPanel>
          <TabPanel>
            <input type="file" key={state.inputFileKey} onChange={handleFileChange} />
          </TabPanel>
        </Tabs>

        <br />
        <div className='mb-2'>
          <Button type="submit" variant="primary">Submit</Button>
          {' '}
          <Button type="reset" variant="outline-dark">Clear</Button>
        </div>
      </form>       
    </>
  );
}

export default InputForm;
