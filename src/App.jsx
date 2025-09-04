import React from 'react';
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import {useState} from "react";

const App = () => {

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: ['en-IN', 'en'] })
  const stopListening = SpeechRecognition.stopListening;
  const [textToCopy, setTextToCopy] = useState();
      const [isCopied, setCopied] = useClipboard(textToCopy, {
          successDuration:1000
      });

  return (
    <>
      <div className="container">
        <h2>Speech Recognition</h2>
        <br />
        <p>A React Hook that converts speech from the microphone to text components</p>

        <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
          {transcript}

        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>

      </div>
    </>
  );
};


export default App;