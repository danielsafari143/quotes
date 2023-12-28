import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI("AIzaSyD9j9ZQ-Sy7_OroQ0c1FZE2J66R2xC5ocA");

const run = async (): Promise<string> => {
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about a magic girl";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text)
  return text;
};

export default run;
