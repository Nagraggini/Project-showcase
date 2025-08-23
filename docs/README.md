# Projects & Experience

I started this project to truly learn web development — not just by watching tutorials, but by putting them into practice.

The tasks have been getting progressively more challenging, as you’ll see. I hope that by the end, I’ll have successfully learned how to build for the web.

## You can start here

[Project-showcase](https://nagraggini.github.io/Project-showcase/index.html)

<!--[Project-showcase via Vercel](https://project-showcase-nagraggini.vercel.app)-->
<!--[Project-showcase via Netlify](https://nagraggini.netlify.app)-->

## How to run the frontend

(Instructions coming soon — or add your `npm install` / `npm start` steps here.)

## How to run the backend

(Instructions coming soon — or add your Python/Flask/FastAPI steps here.)

## Current status, dependencies, future plans

### Project Ideas for Web Development

#### Completed Projects

- [Go to Calculator (Built with HTML, CSS, and JavaScript)](Frontend_projects/src/Html+css+javascript_projects/2-Calculator/Main_Calculator.html)
- [Go to Quiz App (Built with HTML, CSS, and JavaScript)](Frontend_projects/src/Html+css+javascript_projects/3-Quiz_App/Main_Quiz_App.html)
- [Go to Rock, Paper, Scissors game (Built with HTML, CSS, and JavaScript)](Frontend_projects/src/Html+css+javascript_projects/1-RockPaperScissors-Game/Main_Stone_game.html)
- [Go to The Weather app (Built with HTML, CSS, JavaScript, and Azure)](https://nagraggini.z13.web.core.windows.net/)

#### Future Projects

- [Go to the Harry Potter Sorting Hat (Built with HTML, CSS, Python) - Work in progress](Frontend_projects/src/Html+css+python_projects/Python_websites/2-Sort_hat/Main_Sort_hat.html)
- [Go to Calculator (Built with HTML, CSS, Python) - Work in progress](Frontend_projects/src/Html+css+python_projects/Python_websites/3-First_python_calculator/Main_Python_Calculator.html)
- [Go to Note App 1 (built with HTML, CSS, JavaScript, Python, Flask, and SQLite) - Work in progress](Backend_projects/src/2-Note_App_1/Main_Note_App_1.html)
- [Go to Note App 2 (built with React, Node.js, and SQLite) - Work in progress](Backend_projects/src/2-Note_App_2/)
- Stopwatch App
- QR Code Reader
- Weather App
- Ecommerce Website
- Landing Page
- Password Generator
- etc.

### Future plans

Create a mobile app for learning English words.
I can upload new words via a website, and the app can display different words.
It can also show a new word on my Android phone via a widget.

English Word Learning App
Overview

The English Word Learning App is a personalized vocabulary builder designed to help users expand their English knowledge one word at a time. The app integrates with a simple web-based admin panel where new words can be uploaded, and then displays them directly on the user’s Android device through the app interface and a convenient home screen widget.

Key Features
🌐 Web Admin Panel
Secure login for the admin.

Add new words with optional details:
Word
Meaning/Translation
Example sentence
Pronunciation or audio (optional)
Words are stored in a centralized database.

📱 Mobile Application (Android)

Fetches and displays the words uploaded via the admin panel.
Shows a “Word of the Day” or random word each time the app is opened.
Home screen widget to display the latest word without opening the app.
Optional daily notifications to remind users of a new word.
Clean and minimal design to keep focus on learning.

🗄️ Database

Option 1: Firebase Firestore (real-time sync, no custom server needed).
Option 2: REST API built with Flask/Django and a relational database (SQLite/Postgres).

User Flow
The admin logs in to the web panel and uploads a new word:

Word: Eloquent
Meaning: Fluent in speaking or writing
Sentence: She gave an eloquent speech that inspired the audience.
The word is stored in the database.

The Android app automatically fetches the latest word.

The home screen widget displays:
Word: Eloquent
Meaning: Fluent in speaking or writing

Each day, a new word appears either randomly or according to the schedule.

Technology Stack

Frontend (Mobile):
Flutter (cross-platform for Android + iOS)
or Kotlin (native Android, better widget handling)

Backend (Web + API):
Firebase Firestore (cloud-based, easiest setup)
or Flask/Django REST API with SQLite/Postgres

## Tech Stack

- **Frontend**: HTML / CSS / JavaScript
- **Backend**: Python (Flask/FastAPI), Azure

## Frontend–Backend Connection

The frontend communicates with the backend via RESTful APIs:

- The **frontend** (HTML, CSS, JavaScript) sends requests to the backend to fetch or submit data.
- The **backend** (Python Flask/FastAPI) handles these requests, performs the necessary processing, and responds with JSON data.
- For dynamic content, the frontend uses JavaScript `fetch()` calls to interact with backend endpoints.
- The backend is hosted on **Azure** and provides APIs for all frontend projects that require server-side logic.

## Folder structure

```plaintext
Project-showcase/
│
├─ frontend/ # All frontend project
│ ├─ project1/
│ │ ├─ index.html
│ │ ├─ style.css
│ │ └─ script.js
│ └─ project2/
│ └─ ...
│
├─ backend/ # All backend project
│ ├─ project1/
│ │ ├─ app.py
│ │ └─ requirements.txt
│ └─ project2/
│ └─ ...
│
├─ assets/ # Pictures, icons, logos
│ └─ icons/
│
├─ docs/ # Dokumentation (how-to-run, notes, description)
│ └─ setup.md
│
├─ .gitignore
├─ README.md
```

## Acknowledgments

I would like to thank my family, friends, and my school for their support.

"During your coding adventure, you are destined to encounter many annoying lil' red errors. But what makes a programmer great isn’t avoiding errors, but knowing how to face them head-on and resolve them. 💪"
Codedex
