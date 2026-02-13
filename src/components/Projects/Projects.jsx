"use client"
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectDetailsCard from "../ProjectDetailsCard";
import LMS from "../../assets/lms-thum.png";
import ECOM from "../../assets/ecommerce_thum.png"

function Projects() {
  const projects = [
    {
      title: "Learning Management System (LMS) – Udemy-Style Platform",
      image: LMS,
      description: "A full stack Learning Management System (LMS) built with MERN and Next.js, featuring secure authentication, role based access, and course management. The app uses React, Tailwind CSS, Redux, and NextAuth for a responsive UI, state management, and protected routes. A Node.js & Express REST API with MongoDB handles scalable backend operations with clean, modular architecture.",
      features: [
        "User authentication & authorization (NextAuth).",
        "Role-based access (Admin / Instructor / Student).",
        "Course creation, enrollment, and management.",
        "Responsive UI with Tailwind CSS.",
        "Global state management with Redux.",
        "RESTful API with Node.js & Express.",
        "MongoDB database integration.",
        "Optimized performance with Next.js (SSR & routing)."
      ],
      techStack: [
        "Frontend: Next.js, React, Redux, Tailwind CSS, JavaScript.",
        "Backend: Node.js, Express.js.",
        "Database: MongoDB.",
        "Authentication: NextAuth.",
        "Architecture: Full-stack MERN with modern best practices."
      ],
      githubLink: "https://github.com/amjathstack/LMS-Prodemy",
      livePreviewLink: "https://lms-prodemy.vercel.app/"
    },
    {
      title: "E-Commerce Multi-Vendor Platform – Marketplace Application",
      image: ECOM,
      description: "A full stack multi-vendor e-commerce platform built with MERN and Next.js, enabling multiple sellers, secure transactions, and scalable product management. The application uses React, Tailwind CSS, Redux, and NextAuth to deliver a responsive user interface, centralized state management, and protected routes. A Node.js & Express REST API with MongoDB powers reliable backend operations with a clean, modular, and scalable architecture.",
      features: [
        "User authentication & authorization (NextAuth ).",
        "Role-based access (Admin / Vendor / Customer).",
        "Vendor onboarding and store management.",
        "Shopping cart, wishlist, and checkout functionality.",
        "Order management with tracking and status updates.",
        "Payment gateway integration (Stripe).",
        "Responsive UI with Tailwind CSS.",
        "Global state management with Redux.",
        "Optimized performance with Next.js (SSR & routing)."
      ],
      techStack: [
        "Frontend: Next.js, React, Redux, Tailwind CSS, JavaScript.",
        "Backend: Node.js, Express.js.",
        "Database: MongoDB.",
        "Authentication: NextAuth.",
        "Payments: Stripe.",
        "Architecture: Full-stack MERN with scalable and modular best practices."
      ],
      githubLink: "https://github.com/amjathstack/ECommerce-Probuy/tree/main/my-app",
      livePreviewLink: "https://ecommerce-probuy.vercel.app"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div id="projects" className="py-30">

      <h1 className="text-3xl font-semibold text-center mx-auto">
        Projects<span className="text-[40px] text-indigo-600">.</span>
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        A showcase of my work featuring modern, scalable, and real world web applications.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            data={item}
            onClick={() => setActiveIndex(index + 1)}
          />
        ))}
      </div>

      {activeIndex &&
        <ProjectDetailsCard
          show={activeIndex}
          onClose={setActiveIndex}
          data={projects[activeIndex - 1]}
        />
      }
    </div>
  );
}

export default Projects;
