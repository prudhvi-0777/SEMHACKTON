import React, { useState } from "react";
import "./Dashboard.css";
import { useAuth } from "./AuthContext";

export default function UserDashboard() {
  const { user } = useAuth();

  // === STATES FOR ALL 12 SECTIONS ===
  const [showLessons, setShowLessons] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showMarks, setShowMarks] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [showAssignments, setShowAssignments] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const [showSkills, setShowSkills] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showDoubts, setShowDoubts] = useState(false);
  const [showFees, setShowFees] = useState(false);

  // === THE DATA (10 ITEMS EACH) ===

  const lessons = [
    "Lesson 1: Introduction","Lesson 2: Basics","Lesson 3: Variables","Lesson 4: Functions","Lesson 5: Arrays",
    "Lesson 6: Loops","Lesson 7: OOP","Lesson 8: Networking","Lesson 9: DBMS","Lesson 10: Mini Project"
  ];

  const resources = [
    "PDF – Introduction","PDF – Programming","PDF – Data Types","PDF – Functions","PDF – Arrays",
    "PDF – Loops","PDF – OOP Notes","PDF – Networking","PDF – Database","PDF – Project Docs"
  ];

  const marks = [
    "Test 1 – 18/20","Test 2 – 12/20","Test 3 – 20/20","Quiz 1 – 9/10","Quiz 2 – 7/10",
    "Assignment 1 – 10/10","Assignment 2 – 8/10","Mid Exam – 45/50","Lab Exam – 48/50","Final Exam – 87/100"
  ];

  const results = [
    "Semester 1 – Pass","Semester 2 – Pass","Semester 3 – Pass","Semester 4 – Pass","Semester 5 – Pass",
    "Semester 6 – Ongoing","Attendance – 92%","CGPA – 8.4","Projects – 3 Completed","Overall Grade – A"
  ];

  const assignments = [
    "Assignment 1 – Completed","Assignment 2 – Submitted","Assignment 3 – Pending","Assignment 4 – Completed",
    "Assignment 5 – Pending","Assignment 6 – Completed","Assignment 7 – Submitted","Assignment 8 – Pending",
    "Assignment 9 – Completed","Assignment 10 – Submitted"
  ];

  const attendance = [
    "January – 95%","February – 92%","March – 88%","April – 96%","May – 94%",
    "June – 90%","July – 89%","August – 92%","September – 93%","October – 91%"
  ];

  const projects = [
    "Project 1 – Login System","Project 2 – Calculator","Project 3 – Weather App","Project 4 – Portfolio",
    "Project 5 – Timer","Project 6 – Chat App","Project 7 – Notes App","Project 8 – API Project",
    "Project 9 – Dashboard","Project 10 – Mini Game"
  ];

  const progress = [
    "Programming – 90%","Data Structures – 80%","DBMS – 85%","Networking – 70%","OOP – 95%",
    "Algorithms – 72%","Communication – 88%","Maths – 93%","Projects – 75%","Overall Progress – 87%"
  ];

  const skills = [
    "HTML – 95%","CSS – 88%","JavaScript – 85%","React – 70%","Java – 80%",
    "Python – 75%","Communication – 90%","Teamwork – 85%","Problem Solving – 80%","Leadership – 75%"
  ];

  const videos = [
    "Lecture 1 – Introduction","Lecture 2 – Arrays","Lecture 3 – Loops","Lecture 4 – Functions",
    "Lecture 5 – OOP Basics","Lecture 6 – DBMS","Lecture 7 – HTML", "Lecture 8 – CSS",
    "Lecture 9 – React Basics","Lecture 10 – Final Revision"
  ];

  const doubts = [
    "Doubt 1 – Variables","Doubt 2 – Functions","Doubt 3 – Arrays","Doubt 4 – Loops","Doubt 5 – OOP",
    "Doubt 6 – DBMS","Doubt 7 – Networking","Doubt 8 – React","Doubt 9 – SQL","Doubt 10 – Project Help"
  ];

  const fees = [
    "Semester 1 – Paid","Semester 2 – Paid","Semester 3 – Paid","Semester 4 – Paid","Semester 5 – Pending",
    "Exam Fee – Paid","Library Fee – Paid","Bus Fee – Not Applicable","Hostel Fee – Pending","Total Due: ₹14,000"
  ];

  return (
    <div className="dash-root">
      <h1 className="dash-title">Welcome, {user.username}</h1>

      <div className="dash-grid">

        {/* ==== 12 DASHBOARD BOXES ==== */}

        {/* 1 - Lessons */}
        <DashBox title="📘 Lessons" state={showLessons} setState={setShowLessons} label="Lessons" list={lessons} />

        {/* 2 - Resources */}
        <DashBox title="📚 Resources" state={showResources} setState={setShowResources} label="Resources" list={resources} />

        {/* 3 - Marks */}
        <DashBox title="📊 Marks" state={showMarks} setState={setShowMarks} label="Marks" list={marks} />

        {/* 4 - Results */}
        <DashBox title="🏆 Results" state={showResults} setState={setShowResults} label="Results" list={results} />

        {/* 5 - Assignments */}
        <DashBox title="📝 Assignments" state={showAssignments} setState={setShowAssignments} label="Assignments" list={assignments} />

        {/* 6 - Attendance */}
        <DashBox title="📅 Attendance" state={showAttendance} setState={setShowAttendance} label="Attendance" list={attendance} />

        {/* 7 - Projects */}
        <DashBox title="🛠 Projects" state={showProjects} setState={setShowProjects} label="Projects" list={projects} />

        {/* 8 - Progress */}
        <DashBox title="📈 Progress Tracker" state={showProgress} setState={setShowProgress} label="Progress" list={progress} />

        {/* 9 - Skills */}
        <DashBox title="🧠 Skills" state={showSkills} setState={setShowSkills} label="Skills" list={skills} />

        {/* 10 - Video Lectures */}
        <DashBox title="🎥 Video Lectures" state={showVideos} setState={setShowVideos} label="Videos" list={videos} />

        {/* 11 - Doubts */}
        <DashBox title="💬 Doubts & Queries" state={showDoubts} setState={setShowDoubts} label="Doubts" list={doubts} />

        {/* 12 - Fees */}
        <DashBox title="🧾 Fee Details" state={showFees} setState={setShowFees} label="Fee Details" list={fees} />

      </div>
    </div>
  );
}

// Reusable component to reduce repeated code
function DashBox({ title, state, setState, label, list }) {
  return (
    <div className="dash-box">
      <h2>{title}</h2>
      <p>View detailed {label.toLowerCase()} information.</p>

      <button className="box-btn" onClick={() => setState(!state)}>
        {state ? "Hide Details" : `Show 10 ${label}`}
      </button>

      {state && (
        <ul className="list-box">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
