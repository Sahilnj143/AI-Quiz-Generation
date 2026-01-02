import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

// const groq = new Groq({
//     apiKey: process.env.GROQ_API_KEY,
// });
const groq = new Groq({
  process.env.GROQ_API_KEY
,
});

router.post("/generate", async (req, res) => {
    try {
        const { topic, level } = req.body;

        const prompt = `
You are a JSON API.

Generate exactly 5 multiple-choice questions on "${topic}" for "${level}" level.

STRICT RULES:
- Return ONLY valid JSON
- No explanations
- No markdown
- No extra text
- Options MUST be A, B, C, D
- correct MUST be one of "A","B","C","D"
- id must be 1 to 5

FORMAT:

{
  "quiz": [
    {
      "id": 1,
      "question": "Question text",
      "options": {
        "A": "Option A",
        "B": "Option B",
        "C": "Option C",
        "D": "Option D"
      },
      "correct": "A"
    }
  ]
}
`;

        const response = await groq.chat.completions.create({
            model: "mixtral-8x7b-32768",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
        });

        const raw = response.choices[0].message.content;

        // ✅ clean JSON
        const json = raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
        const parsed = JSON.parse(json);

        // ✅ normalize structure
        parsed.quiz = parsed.quiz.map((q, i) => ({
            id: i + 1,
            question: String(q.question),
            options: {
                A: String(q.options.A),
                B: String(q.options.B),
                C: String(q.options.C),
                D: String(q.options.D),
            },
            correct: ["A", "B", "C", "D"].includes(q.correct) ? q.correct : "A",
        }));

        res.json(parsed);

    } catch (err) {
        console.error("Groq Error:", err);
        res.status(500).json({ error: "Quiz generation failed" });
    }
});

export default router;
