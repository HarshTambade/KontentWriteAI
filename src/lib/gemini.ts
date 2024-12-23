import { GoogleGenerativeAI } from '@google/generative-ai';
import { useApiKeyStore } from './store';

export const getGeminiClient = () => {
  const apiKey = useApiKeyStore.getState().apiKey;
  if (!apiKey) throw new Error('API key not found');
  
  return new GoogleGenerativeAI(apiKey);
};

export const generateContent = async (prompt: string, maxTokens = 1024) => {
  const genAI = getGeminiClient();
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};