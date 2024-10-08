# DialectAI

## Description
DialectAI is an innovative web application designed to bridge language barriers and enhance communication across cultures. By leveraging advanced AI technologies, it provides users with seamless text translation, speech recognition, and audio playback features. Whether you're a traveler, a student, or simply someone looking to connect with others, DialectAI empowers you to express yourself in multiple languages effortlessly.

# Project Screenshots

## Screenshot 1
![Screenshot 1](./READMEassets/image1.png)

## Screenshot 2
![Screenshot 2](./READMEassets/image2.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack
- **Next.js**: A powerful React framework for building server-rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Google Gemini API**: Utilizes cutting-edge AI models for natural language processing and translation.
- **React Speech Recognition**: Integrates speech recognition capabilities for a hands-free experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Aceternity UI**: A UI library providing a set of reusable components for building consistent and visually appealing interfaces.

## Features
- **Speech Recognition**: Converts spoken words into text using the Web Speech API.
- **Text Translation**: Translates recognized text into a selected target language using OpenAI's GPT-4 model.
- **Audio Playback**: Converts translated text back into speech using the Web Speech API's speech synthesis.
- **File Upload**: Reads and translates text from uploaded files, including RTF to plain text conversion.
- **Language Selection**: Allows users to select target languages for translation.
- **Copy to Clipboard**: Copies the translated text to the clipboard.
- **Responsive Design**: Ensures a seamless experience across different devices.

## Quick Start

### Prerequisites
Make sure you have the following installed on your machine:
- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository
```bash
git clone https://github.com/ArjunAmbavane01/Dialect-AI.git
cd Dialect-AI
```

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Set Up Environment Variables
Create a new file named `.env` in the root of your project and add the following content:
```
NEXT_PUBLIC_API_KEY=your-api-key
```

Replace the placeholder value with your actual OpenAI credentials. You can obtain these credentials by signing up on the OpenAI website.

### Running the Project
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Acknowledgments
Created with ❤️ by Arjun
