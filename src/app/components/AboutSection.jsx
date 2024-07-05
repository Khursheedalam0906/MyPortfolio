"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>React Js, Next Js, React Native, Redux Toolkit, Context Api</li>
        <li>HTML5, CSS3, JavaScropt(ES6), TypeScript, Bootstrap</li>
        <li>Tailwind CSS, MaterialUi, Figma, Canva, Git & Github</li>
        <li>Visual Studio, Next Auth, versal, Postman, Thunder Client</li>
        <li>Firebase, Android Studio, Nextjs Server Action, Cloudinary</li>
        <li>Node JS, Express Js, Mongoose, MongoDB, Next Api, </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>High School (10th) - 2013</li>
        <li>Intermediate of Science (12th) - 2015</li>
        <li>Computer Science Engineer (BE) - 2019</li>
        <li>Rajiv Gandhi Technical University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>2 Times Project competation runner</li>
        <li>Best Team player Award</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={600} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base  text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have 5 year working
            experience with React js, Next js, React Native, Redux, HTML, CSS,
            JavaScript(ES6), TypeScript, Bootstrap, tailwind CSS, Figma, Canva,
            Firebase, Android Studio, Postman, Visual Studio, Git & Github,
            Versal, Node JS, Express, mongoose, mongoDB. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-6">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
