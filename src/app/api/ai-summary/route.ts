import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { record } = await request.json();
  if (!process.env.GEMINI_API_KEY) return NextResponse.json({ error: "GEMINI_API_KEY is not configured." }, { status: 503 });
  const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const prompt = `You assist a licensed clinician. Create a concise factual clinical note from this record. Do not diagnose, prescribe, invent facts, or give patient instructions. Use headings: History, Current medicines, Allergies, Key findings, Draft assessment, Follow-up questions. Mark uncertainty clearly. Record:\n${record}`;
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(prompt);
  return NextResponse.json({ summary: result.response.text() });
}
