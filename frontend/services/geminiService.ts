import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateLoreResponse = async (prompt: string): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    const systemInstruction = `
      Você é o Guardião do Grimório de Trimera Universe, um universo de fantasia épica.
      O universo tem uma estética grega antiga, mapas desgastados e magia profunda.
      Responda sempre como um velho sábio bibliotecário, usando linguagem arcaica e mística, mas clara.
      
      Sobre o mundo:
      - Cores quentes (laranja, dourado) representam o poder divino.
      - Existem 7 grandes domínios: Civilização, Deuses, Energias, Entidades, Personagens, Reinos, Regiões.
      
      Se o usuário perguntar algo que você não sabe, invente um detalhe plausível que se encaixe na fantasia épica de Trimera.
      Mantenha as respostas curtas (máximo 3 parágrafos).
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "O Grimório está silencioso... tente novamente mais tarde.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "As energias místicas estão instáveis. Não consigo acessar o conhecimento agora.";
  }
};