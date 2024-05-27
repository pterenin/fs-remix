import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const action: ActionFunction = async ({ request }) => {
  const { entryText } = await request.json();

  if (!entryText) {
    return json({ error: "No entry text provided" }, { status: 400 });
  }

  try {
    const response = await await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `Complete this journal entry: ${entryText}` },
      ],
      max_tokens: 50,
    });

    const suggestion = response.choices[0]?.message;
    return json({ suggestion });
  } catch (error: any) {
    return json({ error: error.message }, { status: 500 });
  }
};
