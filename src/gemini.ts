import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const run = async (inputMessage?: string): Promise<string> => {
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const prompt = inputMessage
    ? inputMessage
    : "Wright for me three quotes on life";

  try {
    const result = await model.generateContent(
      `write for me three quotes with some humain emotions about this :${prompt}`,
    );
    const response = await result.response;
    const text = await response.text();
    return text;

  } catch (error) {
    throw new Error(error)
  }
};

export default run;
