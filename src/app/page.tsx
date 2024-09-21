"use client"
import "regenerator-runtime/runtime"
import TextArea from "@/components/Inputs/TextArea";
import FileUpload from "@/components/Inputs/FileUpload";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import { IconVolume } from "@tabler/icons-react";
import React, { useState, useEffect, ChangeEvent } from "react";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");

  const handleAudioPLayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    
  };

  useEffect(() => {
    // Any client-side only code can go here
  }, []);

  return (
    <div>
      <div className="h-[50rem] w-full bg-[#0a0a0a]">
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl">
                Dialect<span className="text-[#f87315]">AI</span>
                <p className=" text-sm tracking-normal mt-3 text-neutral-400">
                  Dialect Ai: Bridging Voices , Connecting People
                </p>

                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div className="text-lg tracking-normal relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">

                      <TextArea 
                        id="source-language"
                        value={sourceText} 
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                          setSourceText(e.target.value)
                        }} 
                        placeholder="Enter your text here"
                      />

                      <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 flex-row">
                          {typeof window !== 'undefined' && (
                            <SpeechRecognitionComponent setSourceText={setSourceText}/>
                           )} 
                          <IconVolume size={22} className="cursor-pointer text-gray-400 hover:text-zinc-50" onClick={() => handleAudioPLayback(sourceText)}/>
                          <FileUpload handleFileUpload={handleFileUpload} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
