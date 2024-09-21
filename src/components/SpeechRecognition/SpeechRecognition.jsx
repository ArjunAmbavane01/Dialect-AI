import React, {useEffect} from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconMicrophone } from "@tabler/icons-react";


const SpeechRecognitionComponent = ({setSourceText}) => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(()=>{
        setSourceText(transcript)
    },[transcript,setSourceText])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

    const handleVoiceRecording = () => {
        if(listening){
            SpeechRecognition.stopListening()
        }else{
            SpeechRecognition.startListening()
        }
    }

    return (
        <div>
            <IconMicrophone 
            size={22}
            className={`cursor-pointer ${listening ? 'text-zinc-50' : 'text-gray-400'} hover:text-zinc-50`}
            onClick={handleVoiceRecording}/>
        </div>
       )
};

export default SpeechRecognitionComponent;

