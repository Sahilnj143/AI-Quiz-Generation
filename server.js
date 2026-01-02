// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import quizRoutes from "./routes/quizRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static('.'));

// mongoose.connect("mongodb://127.0.0.1:27017/aiquiz")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// app.use("/quiz", quizRoutes);

// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });

// import express from "express";
// import dotenv from "dotenv";
// import quizRoutes from "./routes/quizRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use("/quiz", quizRoutes);

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });import express from "express";
// import express from "express";
// import dotenv from "dotenv";
// import quizRoutes from "./routes/quizRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use("/quiz", quizRoutes);

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

const express = require('express');
const Groq = require('groq-sdk');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// REPLACE WITH YOUR ACTUAL API KEY
const groq = new Groq({ apiKey: 'gsk_your_key_here' });

app.post('/quiz/generate', async (req, res) => {
  const { topic, level } = req.body;

  const prompt = `Generate a 5-question multiple choice quiz about ${topic} for ${level} level. 
  Return the response in this exact JSON format:
  {
    "quiz": [
      {
        "question": "text",
        "options": {"A": "text", "B": "text", "C": "text", "D": "text"},
        "correct": "A"
      }
    ]
  }`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" }
    });

    res.json(JSON.parse(completion.choices[0].message.content));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));