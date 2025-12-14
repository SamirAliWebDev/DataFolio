import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Initialize the client. 
// NOTE: In a production app, you might want to proxy this through a backend to hide the key, 
// but for a portfolio demo running client-side, we use the env variable directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert simplified history to SDK format if needed, 
    // but here we will just use a fresh chat or simplified single turn for simplicity in this demo context.
    // For a persistent chat, we use the chat feature.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous context
    });

    const response = await chat.sendMessage({
      message: message
    });

    return response.text || "I'm processing that data point, but came up empty. Try asking differently.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. My neural pathways are temporarily blocked. Please try again.";
  }
};