# 🌐 SkillSphere

**SkillSphere** is an interactive web application designed to showcase developer profiles dynamically, allowing recruiters to explore candidates' skills and experiences in a streaming-like interface.  

The platform offers an **engaging and structured way** to present resumes, featuring sections such as **Soft Skills, Education, Work Experience, Certifications**, and more.  

🚀 **Mission:** To simplify talent discovery for recruiters by providing a visually appealing and efficient platform to connect with developers.  

---

## 🔥 Features

✅ **Developer Profiles** – View detailed developer portfolios, including technical skills, projects, and certifications.  
✅ **Interactive Categories** – Navigate profiles through intuitive categories like Soft Skills, Education, and Experience.  
✅ **Recruiter-Only Access** – Recruiters can log in and explore profiles, but only view one at a time.  
✅ **Admin Backoffice** – Manage accounts, activate/deactivate users, and control visible information.  
✅ **Advanced Search & Filtering** – Easily find candidates based on skills, experience, or education.  
✅ **Responsive Design** – Fully optimized for desktops, tablets, and mobile devices.  
✅ **Future Mobile App** – Plans to expand to mobile with seamless interactivity and the same features.  

---

## 💻 Tech Stack

| **Technology**  | **Usage** |
|----------------|-----------|
| **Backend** | Java (Spring Boot) |
| **Frontend** | Next.js (React Framework) |
| **Database** | PostgreSQL |
| **Authentication** | JWT (JSON Web Tokens) |
| **CI/CD** | Jenkins + SonarQube |
| **Database Versioning** | Liquibase |
| **Hosting** | Heroku / AWS / Render |
| **Automated Deploy** | GitHub Actions / Jenkins |

---

## 📂 Project Structure

```
SkillSphere
│── backend
│   │── src
│   │   │── main
│   │   │   │── java/com/skillsphere
│   │   │   │── resources
│   │   │   │   │── application.yml
│   │   │   │   │── data.sql
│   │   │   │   │── schema.sql
│   │   │   │── SkillSphereApplication.java
│   │   │── test
│   │   │   │── java/com/skillsphere
│   │   │   │   │── SkillSphereApplicationTests.java
│   │── pom.xml
│   │── Dockerfile
│   │── README.md
│
│── frontend
│   │── src
│   │   │── components
│   │   │── pages
│   │   │── styles
│   │   │── public
│   │   │── utils
│   │   │── _app.js
│   │── package.json
│   │── next.config.js
│   │── Dockerfile
│
│── docker-compose.yml
│── .gitignore
│── README.md
```

---

## ⚙️ Setup and Installation

### 1️⃣ Clone this repository
```bash
git clone https://github.com/Ferraz5/SkillSphere.git
```

### 2️⃣ Backend Setup

Navigate to the backend directory:
```console
cd backend
```

Install dependencies:
```properties
mvn clean install
```

Run the application:
```properties
mvn spring-boot:run
```


### 3️⃣ Frontend Setup

Navigate to the frontend directory:
```console
cd frontend
```

Install dependencies:
```properties
npm install
```

Run the Next.js development server:

```properties
npm run dev
```

### 4️⃣ Running with Docker (Optional)

To run the project using Docker:
```properties
docker-compose up --build
```

---

## 🚀 Deployment Strategy

- **Continuous Integration (CI):** Automated testing with GitHub Actions and SonarQube for code quality analysis.
- **Continuous Deployment (CD):** Deploys to Heroku / AWS using Jenkins pipelines.
- **Database Migrations:** Managed via Liquibase or Flyway for structured schema evolution.

---
## 📜 API Documentation
The API follows **RESTful principles**, with authentication via **JWT**.
Full API documentation available using **Swagger**.

**🔗 Swagger URL:** ```http://localhost:8080/swagger-ui.html```

### Example API Requests:
🔹 Get all profiles:
```bat
GET /api/profiles
```

🔹 Get a profile by ID:
```bat
GET /api/profiles/{id}
```

🔹 Recruiter login:
```bat
POST /api/auth/login
Content-Type: application/json
{
    "email": "recruiter@example.com",
    "password": "yourpassword"
}
```

---

## 👥 Contributing

We welcome contributions! To get started:

1. **Fork the repository**
2. **Create a new branch** (```feature/new-feature```)
3. **Commit changes** (```git commit -m "Added new feature"```)
4. **Push to the branch** (```git push origin feature/new-feature```)
5. **Create a Pull Request**

---


## 📄 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/Ferraz5/SkillSphere?tab=MIT-1-ov-file) file for details.

---

## 📬 Contact & Support

Have questions or suggestions? Reach out to us!

👤 **Authors:** 
- Tiago Ferraz
- Ricardo Pereira
- Duarte Barbosa
- Tiago Rosado

📧 **Email:** tiagoairesmferraz@gmail.com

## 🚀 SkillSphere – Connecting Talents and Opportunities! 💼
