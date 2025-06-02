import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import move from "../../Assets/Projects/move.png";
import event from "../../Assets/Projects/event.png";
import resturornt from "../../Assets/Projects/resturornt.png";
import job from "../../Assets/Projects/job.png";
import Book from "../../Assets/Projects/bookStore.png";
import shopping from "../../Assets/Projects/shoppingStore.png";
import shoppingStoreBackend from "../../Assets/Projects/shoppingStoreBackend.png";
import adminDashboard from "../../Assets/Projects/AdminBord.png";
import OVE from "../../Assets/Projects/OVE.png";
import jainam from "../../Assets/Projects/jainam.com.png";
import jainamD from "../../Assets/Projects/jainamD.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jainam}
              isBlog={false}
              title="JAINAM HOSPITAL"
              description="🚑 JAINAM HOSPITAL.COM – AI Powered Dashboard Management System
I have developed a highly professional and responsive Hospital Management System designed to streamline the complete patient and doctor experience using modern web technologies and a microservices architecture. The system supports seamless online appointment booking, real-time doctor consultations via video calls, live chat for instant support, and a secure medical report management system. Patients can easily view their appointment history, download medical reports, and communicate directly with healthcare professionals—all from a user-friendly dashboard.
In addition to the core hospital functionalities, the platform integrates a full-fledged e-commerce module that allows patients to order medicines online with doorstep delivery. The interface is clean, elegant, and fully optimized for both mobile and desktop devices. An AI-powered assistant is integrated to help patients with appointment scheduling, symptom analysis, and general support, making the experience intelligent and efficient.
Built on a robust microservices architecture, the system ensures high performance, scalability, and secure data management. Whether it's appointment booking, medicine ordering, or virtual consultation, everything is designed with user-first principles, professional design standards, and future-ready technologies.
"
              ghLink="https://github.com/Aayushajs/Jainam-Hospital-Frontend"
              demoLink="https://jainam-hospital.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jainamD}
              isBlog={false}
              title="AI PAWORD JAINAM DASHBOARD MENEGMENT SYSTEM"
              description="📊 AI Powered Hospital Dashboard – Smart & Responsive Healthcare Control Panel
The hospital dashboard I designed is a central, intelligent control panel that provides a powerful and professional interface for both doctors and administrators. Built with precision and modern UI/UX practices, the dashboard is fully responsive across all devices—from desktops to smartphones—ensuring smooth usability everywhere.
At a glance, users can track live patient data, manage appointments, access medical reports, and monitor real-time analytics related to hospital operations. Each module—appointments, patient records, medicine orders, and video consultations—is neatly organized into dynamic, interactive cards and charts, offering a clutter-free and efficient user experience.The dashboard includes built-in AI assistance that helps staff with quick suggestions, smart filtering, patient prioritization, and automated alerts—enhancing productivity and decision-making speed. Integrated live chat and video consultation panels allow healthcare professionals to directly connect with patients from the dashboard itself.
Additionally, the dashboard features medicine inventory tracking, order monitoring, and report generation tools that make the system a complete all-in-one solution for hospitals aiming to go digital. Developed on a microservices architecture, it ensures high scalability, security, and easy integration with third-party services like pharmacy APIs and appointment reminders via email or SMS."
              ghLink="https://github.com/Aayushajs/Hospital-Dashboard"
              demoLink="https://jainamdashbord.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="BOOK STORE"
              description="This project is a simple book store app where you can add, delete, and update books. It is built using React, Redux, and Material-UI. The app is responsive and has a clean and modern design. The app uses Redux for state management and Material-UI for styling. The app is deployed on Netlify.
              This is a bookstore web application built using the MERN stack (MongoDB, Express.js, Vite.js, Node.js). The project allows users to browse, upload, and manage books in an interactive, user-friendly interface. The application features an intuitive UI with responsive design, enabling a smooth experience across devices."
              ghLink="https://github.com/Aayushajs/Book-Store-Frontend"
              demoLink="https://bookstores-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="SHOPPING STORE E-Commerce Website "
              description="This project is a simple e-commerce website where you can add, delete, and update products. It is built using React, Redux, and Material-UI. The app is responsive and has a clean and modern design. The app uses Redux for state management and Material-UI for styling. The app is deployed on Netlify.
              This project is the frontend of an e-commerce website built using React.js. It provides a user-friendly interface for browsing and purchasing products. The frontend communicates with the backend via RESTful APIs and supports features such as product listing, user authentication, and a shopping cart."
              ghLink="https://github.com/Aayushajs/E-COMMERCE-FRONTEND"
              demoLink="https://e-stores1.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resturornt}
              isBlog={false}
              title="Resturent"
              description="This project aims to showcase your front-end development skills through the creation of a visually appealing and highly functional website for a fictional restaurant. The website will blend aesthetics with functionality, providing an engaging user experience through modern design and interactive elements.
              Technologies Used
              HTML5: For structuring the content and layout of the website.
              CSS3: For styling the website, including layout, colors, typography, and responsive design.
              JavaScript: For adding interactivity, such as form validation, image sliders, and dynamic content updates."
              ghLink="https://github.com/Aayushajs/Resturent-Project"
              demoLink="https://resturaltresturent-project.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OVE}
              isBlog={false}
              title="Multi-Tenant E-Commerce Website Backend API"
              description="backend API for a multi-tenant e-commerce system where multiple vendors can register, manage their products, and handle orders. Use Node.js, Express.js, and MongoDB for the backend API. Implement authentication, role-based access control, and pagination for efficient operations. The API should support CRUD operations for vendors, products, and orders.
                            This API allows vendors to register, manage products, and handle orders in a multi-tenant e-commerce platform. Built with Node.js, Express.js, and MongoDB, the system includes authentication, role-based access control, and pagination for efficient operations.9"
              ghLink="https://github.com/Aayushajs/Ovs-Innovation-Pvt-Lid"
              demoLink="https://ovs-innovation-pvt-lid.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={move}
              isBlog={false}
              title="Move-App"
              description="Relocating can be a complex and stressful experience, but with Move, your all-in-one moving app, the entire process is simplified and organized. Whether you’re moving across town or across the country, Move is designed to manage every aspect of your move efficiently and effectively
              Technologies Used HTML5: For structuring the content and layout of the website. CSS: For styling the website, including layout, colors, typography, and responsive design. JavaScript: For adding interactivity, such as form validation, image sliders, and dynamic content updates."
              ghLink="https://github.com/Aayushajs/MOVE-APP"
              demoLink="https://moveapp20.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job-Search"
              description="Job Search Website. Built with Vite, React, Redux, Node.js, Express, MongoDB. Features: User Auth, Job Listings, Company Profiles, User Profiles, Real-time Notifications, Admin Dashboard. Technical Highlights: Vite, React, Redux, Node.js, Express, MongoDB. Benefits: Scalable, Fast, Secure, Easy Job Search.
                          This project is a job search website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website allows users to browse, search, and apply for jobs, as well as create and manage their profiles. The project features a clean and intuitive UI with responsive design, enabling a seamless experience across devices."
              ghLink="https://github.com/Aayushajs/JOB-SEARCH-FRONTEND"
              demoLink="https://jobsearch-platfrom.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingStoreBackend}
              isBlog={false}
              title="Shopping Store Website Backend APIs"
              description="This e-commerce backend uses Node.js, Express.js, and MongoDB to manage products. It supports features like viewing all products, retrieving product details by ID, creating, updating, and deleting products. The product model includes title, price, description, category, and image. 
                It provides RESTful API endpoints for managing users and products, including user login, product retrieval, and more. The backend integrates with the database using Mongoose and supports CRUD operations for various e-commerce functionalities."
              ghLink="https://github.com/Aayushajs/E-COMERCE-BACKEND"
              demoLink="https://e-comerce-backend-mf8i.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminDashboard}
              isBlog={false}
              title=" E-Commerce Website Admin Dashboard (ONLY FOR PC AND LEPTOPS)"
              description="This project is the frontend of an e-commerce website built using React.js. It provides a user-friendly interface for browsing and purchasing products. The frontend communicates with the backend via RESTful APIs and supports features such as product listing, user authentication, and a shopping cart.
                         This is my admin Dashboard web . and am making for frontend and backend using custom API for data get."
              ghLink="https://github.com/Aayushajs/Admin-Dashboard"
              demoLink="https://admin2-dashboard.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event-Organization"
              description="This project will highlight your front-end development skills by building a comprehensive platform for managing and promoting events
                Technologies Used
                HTML5: To structure the website content.
                CSS3: To style the website, including layout, colors, typography, and responsive design.
                JavaScript: To add interactive features, such as form validation, dynamic content updates, and image sliders."
              ghLink="https://github.com/Aayushajs/Event-Organization"
              demoLink="https://event-organization.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
