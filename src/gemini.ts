import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI("AIzaSyD9j9ZQ-Sy7_OroQ0c1FZE2J66R2xC5ocA");

const run = async (inputMessage?:string):Promise<string> => {
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const prompt = inputMessage ? inputMessage : 'Wright for me three quotes on life'

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
};

export default run;
