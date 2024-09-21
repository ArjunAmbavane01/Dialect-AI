import {useEffect, useState} from 'react';
import { configDotenv } from 'dotenv';
const { GoogleGenerativeAI } = require("@google/generative-ai");

configDotenv();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const useTranslate = (sourceText, selectedLanguage) => {
    const [targetText, setTargetText] = useState("");

    useEffect(() => {
        const handleTranlsate = async(sourceText) => {
            try{
                
                const prompt = `
                You will be provided with a sentence. This sentence: 
                ${sourceText}. Your tasks are to:
                - Detect what language the sentence is in
                - Translate the sentence into ${selectedLanguage}
                Do not return anything other than the translated sentence.`;
                
                const result = await model.generateContent(prompt);
                const data = result?.response?.text() || 'Error in AI response';
                setTargetText(data);
            } catch(error){
                console.log('Error Translating Text : ',error);
            }

            if(sourceText.trim()){
                const timeoutId = setTimeout(() => {
                    handleTranlsate(sourceText);
                }, 500)

                return () => clearTimeout(timeoutId);
            }
        }
    }, [sourceText, selectedLanguage]);

    return targetText;
}

export default useTranslate;