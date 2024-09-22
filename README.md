# DialectAI

## Description
DialectAI is an innovative web application designed to bridge language barriers and enhance communication across cultures. By leveraging advanced AI technologies, it provides users with seamless text translation, speech recognition, and audio playback features. Whether you're a traveler, a student, or simply someone looking to connect with others, DialectAI empowers you to express yourself in multiple languages effortlessly.

## Tech Stack
- **Next.js**: A powerful React framework for building server-rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **OpenAI API**: Utilizes cutting-edge AI models for natural language processing and translation.
- **React Speech Recognition**: Integrates speech recognition capabilities for a hands-free experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features
- **Speech Recognition**: Converts spoken words into text using the Web Speech API.
- **Text Translation**: Translates recognized text into a selected target language using OpenAI's GPT-4 model.
- **Audio Playback**: Converts translated text back into speech using the Web Speech API's speech synthesis.
- **File Upload**: Reads and translates text from uploaded files, including RTF to plain text conversion.
- **Link Content Fetching**: Fetches and translates text content from provided URLs.
- **Language Selection**: Allows users to select target languages for translation.
- **Copy to Clipboard**: Copies the translated text to the clipboard.
- **User Interaction**: Like, Dislike, and Favorite features for translations.
- **Responsive Design**: Ensures a seamless experience across different devices.

## Quick Start

### Prerequisites
Make sure you have the following installed on your machine:
- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository
```bash
git clone https://github.com/mendsalbert/lingua-speak.git
cd linguaspeak
```

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Set Up Environment Variables
Create a new file named `.env` in the root of your project and add the following content:
```
NEXT_PUBLIC_API_KEY=your-openai-api-key
```

Replace the placeholder value with your actual OpenAI credentials. You can obtain these credentials by signing up on the OpenAI website.

### Running the Project
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Acknowledgments
Created with ❤️ by Arjun
