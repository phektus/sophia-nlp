import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const MicControls = ({ setOutputText }) => {
    const recorderControls = useAudioRecorder()
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.id = 'audio-ouput-controls';
        audio.src = url;
        audio.controls = true;
        document.getElementById('audio-output').replaceChildren(audio);

        setOutputText('The quick brown fox jumps over the lazy dog');
    };

    const resetControls = () => {
        document.getElementById('audio-output').replaceChildren();
        setOutputText('');
    }
  
    return (
        <>
            <ButtonGroup>
                <Button>
                <AudioRecorder 
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                />
                </Button>
                
                <Button type="reset" variant="outline-primary" onClick={resetControls}>Reset</Button>
            </ButtonGroup>
            <span 
                id='audio-output'
                style={{
                    position: 'relative',
                    left: '20px',
                    top: '20px'
                }}
            ></span>
        </>
    )
}

export default MicControls;