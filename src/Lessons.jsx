import React from "react";
import "./Lessons.css";

export default function Lessons() {
  const lessons = [
    "Lesson 1: Introduction",
    "Lesson 2: Basics of Programming",
    "Lesson 3: Variables & Data Types",
    "Lesson 4: Operators",
    "Lesson 5: Conditional Statements",
    "Lesson 6: Loops",
    "Lesson 7: Arrays",
    "Lesson 8: Functions",
    "Lesson 9: Objects",
    "Lesson 10: OOP Concepts",
    "Lesson 11: Classes & Objects",
    "Lesson 12: Inheritance",
    "Lesson 13: Polymorphism",
    "Lesson 14: Encapsulation",
    "Lesson 15: Networking Basics",
    "Lesson 16: Database Intro",
    "Lesson 17: SQL Basics",
    "Lesson 18: React Introduction",
    "Lesson 19: Hooks",
    "Lesson 20: Building a Project"
  ];

  return (
    <div className="lesson-root">
      <h1 className="lesson-title">📘 All Lessons</h1>

      <div className="lesson-list">
        {lessons.map((item, i) => (
          <div key={i} className="lesson-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
