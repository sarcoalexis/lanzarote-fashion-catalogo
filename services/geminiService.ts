
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual experto de "Lanzarote Fashion", una boutique de calzado premium y minimalista.
Tu estilo debe ser elegante, servicial y profesional.
Información de la marca:
- Ubicación: Inspirada en la elegancia de Lanzarote.
- Productos: Zapatos de alta gama, artesanales y de diseño minimalista.
- Colores: Azul Real y Dorado.
- Ofrecemos envío gratuito en pedidos superiores a 150€.
- Política de devolución: 30 días.
Responde siempre en español de forma cortés.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, estoy teniendo dificultades técnicas. Por favor, inténtalo de nuevo más tarde.";
  }
}
