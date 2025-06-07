import { GoogleGenAI } from "@google/genai"
import { NextRequest, NextResponse } from "next/server"

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
})

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    

    const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents:`${message} give a precise and to the point answer.`,
  });
console.log(response)
const text = response.text

    return NextResponse.json({ reply: text })
  } catch (error: any) {
    console.error("Gemini API Error:", error.message)
    return NextResponse.json(
      { error: "Failed to generate response from Gemini" },
      { status: 500 }
    )
  }
}
