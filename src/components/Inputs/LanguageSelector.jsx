import React from 'react';
import { IconLanguage } from "@tabler/icons-react";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage, languages }) => (
    <span className='cursor-pointer rounded-lg space-x-1 pl-2 bg-neutral-700 flex items-center flex-row'>
        <IconLanguage size={20} />
        <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className='bg-neutral-700 flex flex-row rounded-full py-1 text-white text-sm'>
            {languages.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>
    </span>
);

export default LanguageSelector;