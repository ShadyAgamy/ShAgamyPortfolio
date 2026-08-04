const img = (name) => `${process.env.PUBLIC_URL}/imgs/projects/${name}`;

const portfolioData = [
  {
    id: "cover-letter-ai",
    name: "Cover Letter AI",
    url: "https://cover-letter-ai-nu.vercel.app",
    desc: "AI cover letter generator (React, TypeScript, Vercel serverless, Groq LLM)",
    imgSrc: img("cover-letter-ai.png"),
  },
];

export default portfolioData;
