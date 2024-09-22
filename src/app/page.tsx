"use client"
import "regenerator-runtime/runtime"
import React, { useState, ChangeEvent, memo } from "react";
import TextArea from "@/components/Inputs/TextArea";
import FileUpload from "@/components/Inputs/FileUpload";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import { rtfToText } from "@/utils/rftToText";
import useTranslate from "@/hooks/UseTranslate";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import { IconVolume, IconCopy } from "@tabler/icons-react";
import { SparklesCore } from "@/components/ui/sparkles";

const SparklesCoreMemoized = memo(SparklesCore);

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English",
    "French",
    "German",
    "Spanish",
    "Chinese",
    "Hindi",
    "Japanese"
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleAudioPLayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className="h-full overflow-hidden w-full bg-[#0a0a0a]">
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center mt-[-65px]">
              <h1 className="text-7xl font-bold tracking-tight text-neutral-200 sm:text-7xl">
                Dialect<span className="text-[#f87315]">AI</span>
                <p className="text-base tracking-normal mt-3 text-neutral-400">
                  Dialect Ai: Bridging Voices , Connecting People
                </p>

                <div className="w-full h-40 relative">
                <SparklesCoreMemoized
                  background="transparent"
                  minSize={0.8}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full mt-1"
                  particleColor="#FFFFFF"
                />
                <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>


                <div className="mt-7 sm:mt-12 mx-auto max-w-5xl relative">
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

                      <div className="flex flex-row justify-between w-full mt-2">
                        <span className="cursor-pointer flex space-x-2 flex-row">
                          <SpeechRecognitionComponent setSourceText={setSourceText} />
                          <IconVolume size={22} className="cursor-pointer text-gray-400 hover:text-zinc-50" onClick={() => handleAudioPLayback(sourceText)} />
                          <FileUpload handleFileUpload={handleFileUpload} />
                        </span>
                        <span className="text-sm pr-4">
                          {sourceText.length} / 2000
                        </span>
                      </div>
                    </div>

                    <div className="text-lg tracking-normal relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">

                      <TextArea
                        id="target-language"
                        value={targetText}
                        onChange={() => { }}
                        placeholder="Translated Text ..."
                      />

                      <div className="flex flex-row justify-between w-full mt-2">
                        <span className="cursor-pointer flex space-x-2 flex-row items-center">
                            <LanguageSelector
                              selectedLanguage={selectedLanguage}
                              setSelectedLanguage={setSelectedLanguage}
                              languages={languages}
                            />
                          <IconVolume size={22} className="cursor-pointer text-gray-400 hover:text-zinc-50" onClick={() => handleAudioPLayback(targetText)} />
                        </span>
                        <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                          <IconCopy size={22} onClick={handleCopyToClipboard} />
                          {copied && (
                            <span className="text-xs text-green-500">Copied!</span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </h1>
              <p className="mt-7 text-white text-sm">Created with ❤️ by Arjun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
