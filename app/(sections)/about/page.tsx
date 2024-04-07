"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <motion.h1
          className="text-2xl font-bold text-center mt-2 mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I am a passionate full-stack web developer with hand on experience in
          building scalable and innovative web applications.
          <br />
          <br />
          My educational background includes a Bachelor of Science degree in
          Computer Science from Ambo University, Hachalu Hundessa campus (IoT),
          Ambo.
          <br />
          <br />I have experience working as a
          <span className="font-semibold mx-2">
            Full Stack Web Developer Intern
          </span>
          at ASTU ICT Center where I developed web applications using Laravel
          framework, MYSQL, and XAMPP. During my time at ASTU, I also used
          PHP(pure) to develop scalable applications. My skills include
          proficiency in HTML, CSS, JavaScript, PHP,Laravel, React-Vite ,
          Node.JS, Express.JS, MongoDB, Github, Visual Studio Code, cpanel, and
          Vercel.
          <br />
          <br />I have completed various projects, including
          <span className="font-semibold mx-2 transition-all duration-200 hover:scale-105">
            a Hosiptal Managemet system, Job portal,simple to do app and so on,
          </span>
          which demonstrate my technical expertise and attention to detail.
          <br />
        </motion.p>
      </div>
    </div>
  );
}
