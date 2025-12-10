import { Github, Linkedin, ShoppingCart, LineChart, Send } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Bohdan Barulin",
  role: "PYTHON BACKEND DEVELOPER",
  location: "Lutsk, Ukraine",
  email: "email@x0ryz.cc",
  about: "Motivated Computer Science student looking for a Backend internship. Passionate about Python, building APIs, and learning best practices in software engineering."
};

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    url: "https://www.github.com/x0ryz", 
    icon: Github, 
    hoverColor: "hover:bg-black" 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/x0ryz/", 
    icon: Linkedin, 
    hoverColor: "hover:bg-[#0077b5]" 
  },
  { 
    name: "Telegram", 
    url: "https://t.me/x0ryz", 
    icon: Send, 
    hoverColor: "hover:bg-[#229ED9]" 
  }
];

export const SKILLS = [
  { 
    title: "Backend Core", 
    items: ["Python", "Django / DRF", "FastAPI"], 
    highlight: true 
  },
  { 
    title: "Libraries & Testing", 
    items: ["Pydantic", "SQLAlchemy", "Alembic", "Pytest"], 
    highlight: false 
  },
  { 
    title: "Data & Brokers", 
    items: ["PostgreSQL", "Redis", "MongoDB", "RabbitMQ", "MinIO"], 
    highlight: false 
  },
  { 
    title: "DevOps & Tools", 
    items: ["Docker", "Nginx", "Linux", "Git", "Postman"], 
    highlight: false 
  }
];

export const SOFT_SKILLS = ["Teamwork", "Problem Solving", "Adaptability"];

export const LANGUAGES = [
  { name: "Ukrainian", level: "Native", score: "Native" },
  { name: "English", level: "B1 / Intermediate", score: "B1" }
];

export const PROJECTS = [
  { 
    title: "Qwerty E-commerce", 
    icon: ShoppingCart,
    desc: "Robust store backend with Stripe payments, async tasks (Celery/RabbitMQ) and caching.", 
    tags: ["Django", "Celery", "Docker", "Stripe"],
    github: "https://github.com/x0ryz/qwerty", // Додайте лінки
    demo: "https://qwerty.x0ryz.cc" // Або посилання, якщо є
  },
  { 
    title: "Finance Tracker API", 
    icon: LineChart,
    desc: "High-performance expense tracking system with JWT auth and complex data aggregation.", 
    tags: ["FastAPI", "SQLAlchemy", "Pydantic"],
    github: "https://github.com/x0ryz/okane",
    demo: "https://okane.x0ryz.cc/docs" // Наприклад, Swagger
  },
  { 
    title: "University Schedule Bot", 
    icon: Send,
    desc: "Telegram bot for students to view real-time class schedules and university updates.", 
    tags: ["Aiogram", "PostgreSQL", "AsyncIO"],
    github: "https://github.com/x0ryz/uni-schedule-app",
    demo: "https://t.me/lntu_study_bot"
  }
];