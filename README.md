<<<<<<< HEAD
# Ai-Quiz-Generator
Quiz Generator is a web-based application that allows students to take quizzes dynamically generated using an AI model. The system collects basic student details, generates topic-wise quizzes based on difficulty level, evaluates answers, and displays results with feedback.

🎯 Features

Student registration (Name, Email, Mobile)

Topic-based quiz generation

Difficulty levels: Beginner, Intermediate, Advanced

AI-powered question generation

Multiple-choice questions with options

10-minute countdown timer

Automatic quiz submission when time ends

Score and feedback displayed on a separate result page

Quiz results stored in MongoDB

🛠️ Technologies Used
Frontend-

HTML

CSS

JavaScript

Backend-

Node.js

Express.js

Database-

MongoDB (MongoDB Compass)

AI Integration-

Groq API (LLaMA 3.1 Model)

📂 Project Structure
ai-quiz/
│

├── server.js

├── package.json

├── .env

│
├── routes/

│   └── quizRoutes.js
│

├── utils/

│   └── groq.js
│

├── models/

│   └── QuizResult.js
│

├── student.html

├── quiz.html

└── result.html


▶️ How to Run the Project
Step 1: Install Dependencies
npm install

Step 2: Start MongoDB

Open MongoDB Compass

Connect to:

mongodb://127.0.0.1:27017

Step 3: Set Environment Variable

Create a .env file in the root folder:

GROQ_API_KEY=your_groq_api_key_here

Step 4: Run Backend Server
node server.js


Expected output:

MongoDB connected
Server started on port 5000

Step 5: Open Frontend

Open student.html in a web browser

Fill student details

Start quiz and submit answers

🧪 Database Details

Database Name: aiquiz

Collection Name: quizresults

Stores quiz topic, level, score, feedback, and timestamp

🧠 System Flow

Student enters personal details

Selects quiz topic and difficulty

AI generates quiz questions

Student answers within time limit

Quiz is auto-submitted or manually submitted

Result and feedback are displayed

📊 Future Enhancements

Admin dashboard to view results

Certificate generation

User authentication

Result analytics

PDF report export

👨‍🎓 Author

Name: Sahil Namdev Jadhav


Department: Artificial Intelligence & Data Science

🧑‍🏫 Academic Use

This project is developed for educational purposes and demonstrates the use of AI-powered quiz generation, backend integration, and database management.
=======
# AI-Quiz-Generation
Using Groq APi , Generating Quiz  by Levels, 
>>>>>>> f4cdde61e3c3848515fa3da4e5f54307939c16ad
