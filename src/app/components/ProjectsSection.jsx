"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Filmyworld : React Js & firebase",
    description:
      "Project 1 - filmyword collects movies and TV reviews from critics and audiences, providing ratings, summaries, and insights to help users make informed viewing choices.",
    image: "/images/projects/filmyworld.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Khursheedalam0906/filmyworld-Reactjs-with-firebase",
    previewUrl: "https://filmyworld-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Aceuss : React Native",
    description:
      "Project 2 - Healthcare management application that simplifies the business process and organise the activity of patients and caretakers and keep record.",
    image: "/images/projects/aceuss.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "STUDENT STORE : React js",
    description:
      "Project 3 - Develop an e-commerce platform focused on students, enabling them to sell services and products.  Used Tech: React Js, JavaScript , Node js and express js.",
    image: "/images/projects/studentstore.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.studentstore.se/",
  },
  {
    id: 4,
    title: "ORTMEDICA : React js",
    description:
      "Project 4 - A hospital management application with  admin panel along with frontend website. Used Tech : React Js, JavaScript, Node js, express js and Mongodb.",
    image: "/images/projects/ortmedica.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://ortmedica.se/",
  },
  {
    id: 5,
    title: "Mapilia : React Js Node js",
    description:
      "Project 5 - Tour and Travelling web appilicatin they provide Educational tourism, Medical tourism, leisure tourism, and cultural tourism. and Hotel booking facility. Used Tech - React Js Nodejs express js Mongodb",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://mapilia.com",
  },
  {
    id: 6,
    title: "My Portfolio : Next js",
    description:
      "Project 6 - Devloped a portfolio website using Next.Js frameworks to showcase my skills, projects, and achievements. implemented CI/CD pipeline to automate the devlopment process.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://khursheedalam.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
