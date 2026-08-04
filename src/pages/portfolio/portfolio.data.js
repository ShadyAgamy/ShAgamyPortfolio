const img = (name) => `${process.env.PUBLIC_URL}/imgs/projects/${name}`;

const portfolioData = [
  {
    id: "cover-letter-ai",
    name: "Cover Letter AI",
    url: "https://cover-letter-ai-nu.vercel.app",
    desc: "AI cover letter generator (React, TypeScript, Vercel serverless, Groq LLM)",
    imgSrc: img("cover-letter-ai.png"),
    type: "react",
  },
  {
    id: "face-detection",
    name: "FACE-DETECTION",
    url: "https://shadyagamy.github.io/facerecognition/",
    desc: "Face detection React App using clarifai face detection model API",
    imgSrc: img("face-detection.png"),
    type: "react",
  },
  {
    id: "Netflix-clone",
    name: "Netflix-UI-Clone",
    url: "https://shadyagamy.github.io/Netflix-clone/",
    desc: "UI-clone for Netflix homepage using ReactJs",
    imgSrc: img("netflix.png"),
    type: "react",
  },
  {
    id: "travel-advisor",
    name: "travel-advisor",
    url: "https://shadyagamy.github.io/TravelAdvisor/",
    desc: "Travel Companion Application using Google Maps (React and Material UI)",
    imgSrc: img("traveladvisor.png"),
    type: "react",
  },
  {
    id: "Shotmed",
    name: "Shotmed",
    url: "https://shadyagmy.github.io/Shotmed/build/",
    desc: "HTML5, CSS3, JQUERY Modern website",
    imgSrc: img("shotmed.png"),
    type: "jquery",
  },
  {
    id: "RAYA CC",
    name: "RAYA CC",
    url: "https://shadyagamy.github.io/RayaCC/build/index.html",
    desc: "HTML5, CSS3, JQUERY Modern website",
    imgSrc: img("rayacc.png"),
    type: "jquery",
  },
];

export default portfolioData;
