# student-management-system
🎓 Student Management System (Enterprise CRUD)

📌 Project Overview

The Student Management System is a full-stack web application designed to manage student records efficiently. It supports complete CRUD operations (Create, Read, Update, Delete) with a relational database structure, making it suitable for academic institutions.


🚀 Features

✅ Core Features

- Add, view, update, and delete student records
- Store detailed student information:
  - Student Name
  - Father Name
  - Mother Name
  - Department
  - Course
  - Percentage

🔍 Advanced Features

- Search students by name
- Dropdown selection for Department and Course
- Relational database using foreign keys
- MVC (Model-View-Controller) architecture
- Secure database queries (prepared statements)
- Frontend and backend validation



🛠️ Tech Stack

Frontend

- HTML
- CSS
- JavaScript

Backend

- Node.js
- Express.js

Database

- MySQL



📁 Project Structure

student-management-system/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── departmentRoutes.js
│   │   └── courseRoutes.js
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md



🗄️ Database Design

Tables:

- students
- departments
- courses
- subjects

Relationships:

- A student belongs to one department
- A student belongs to one course
- Foreign keys ensure relational integrity



⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone <your-repo-link>
cd student-management-system

2️⃣ Install Dependencies

npm install

3️⃣ Configure Database

- Create database: "student_db"
- Run SQL scripts to create tables (students, departments, courses, subjects)

4️⃣ Start Backend Server

node backend/server.js

Server runs on:

http://localhost:3000

5️⃣ Run Frontend

- Open "frontend/index.html" in browser
- OR use Live Server in Visual Studio Code



🔗 API Endpoints

Students

- "GET /api/students" → Get all students
- "POST /api/students" → Add student
- "PUT /api/students/:id" → Update student
- "DELETE /api/students/:id" → Delete student

Departments

- "GET /api/departments"

Courses

- "GET /api/courses"


🧪 Testing

- Use browser or API tools like Postman
- Verify CRUD operations and search functionality



🔒 Security Features

- Input validation on frontend and backend
- SQL injection prevention using prepared statements
- Environment variables for database credentials


🎯 Future Enhancements

- User authentication (JWT login system)
- Student dashboard with analytics
- Multiple subjects per student
- File upload (marksheets, documents)
- Deployment on cloud platforms


👨‍💻 Author

- Developed as part of academic project
- Course: Computer Science & Business Systems



📌 Conclusion

This project demonstrates a complete enterprise-level CRUD system using modern web technologies, emphasizing scalability, security, and structured design.
