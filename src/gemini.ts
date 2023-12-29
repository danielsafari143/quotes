import { GoogleGenerativeAI } from "@google/generative-ai";
import spinner from "./spinner";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const run = async (inputMessage?: string): Promise<string> => {
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const prompt = inputMessage
    ? inputMessage
    : "Wright for me three quotes on life";

  try {
    spinner();
    const result = await model.generateContent(
      `write for me 3 quotes of same lengths of letters with humain emotions , the response must be in an array splitted with # , the quotes must be about this words:${prompt}`,
    );
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    throw new Error(error);
  }
};

export default run;
