import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Generative AI API with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);

export const generateMovieRecommendations = async (prompt) => {
  try {
    // Make sure we're using the latest model name and API version
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    // Configure generation parameters for better results
    const generationConfig = {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    };
    
    // Generate content with the specified prompt
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });
    
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Provide more detailed error information
    if (error.message.includes("404")) {
      throw new Error("Model not found. Please check your API version and model name.");
    } else if (error.message.includes("403")) {
      throw new Error("API key unauthorized. Verify your API key is valid and has necessary permissions.");
    } else if (error.message.includes("429")) {
      throw new Error("Rate limit exceeded. Please try again later.");
    } else {
      throw error;
    }
  }
};