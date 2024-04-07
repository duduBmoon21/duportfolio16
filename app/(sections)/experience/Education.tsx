"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col my-20 ">
      <div className="max-w-[32rem] flex justify-center items-center mx-auto">
        <motion.ol
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative border-s  border-gray-200 dark:border-gray-700"
        >
          {Data.map((data) => (
            <li key={data.name} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 md:-start-6  ring-2">
                <img src={data.logo} className="rounded-full" alt={data.name} />
              </span>
              <h3 className="flex flex-col md:flex-row mb-2 ml-3 text-lg font-semibold">
                {data.name}
                <Button
                  size="sm"
                  variant="outline"
                  className=" max-w-fit md:ms-3"
                >
                  {data.timeSpan}
                </Button>
              </h3>
              <time className="block ml-3 mb-2 text-base font-normal leading-none text-blue-400-200 ">
                {data.course}
              </time>
            </li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Education;

const Data = [
  {
    name: "Ambo University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZljORx_SnYITEx5dM53gErdbctLaA09S6EuqEVnsk1_YwxZVchY8Uuk0U-jmc0MI9Nq8&usqp=CAU",
    timeSpan: "2019 - 2023",
    course: "Bachelor of Science in Computer Science",
  },
];
