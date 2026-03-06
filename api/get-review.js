import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  const { code } = req.body;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(
    `Review this code and suggest improvements:\n\n${code}`
  );

  const response = await result.response;
  const text = response.text();

  res.status(200).json(text);
}