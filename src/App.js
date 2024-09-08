import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    summary: "",
    techCorp: "",
    workDuration: "",
    phoneNumber: "",
    portfolio: "",
    github: "",
    linkedln: "",
    twitter: "",
    university: "",
    major: "",
    startDate: 0,
    endDate: 0,
  });

  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleTextareaChange = (e) => {
    setCurrentSkill(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentSkill.trim() !== "") {
      e.preventDefault();
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
  };

  const handleData = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData({
      ...formData, // Keep the existing form data
      [name]: value, // Dynamically update the field that was changed
    });
  };

  return (
    <div className="ui-container">
      <Form
        formData={formData}
        handleData={handleData}
        currentSkill={currentSkill}
        handleKeyDown={handleKeyDown}
        handleTextareaChange={handleTextareaChange}
      />
      <Cv formData={formData} skills={skills} />
    </div>
  );
}

function Form({
  formData,
  handleData,
  currentSkill,
  handleTextareaChange,
  handleKeyDown,
}) {
  const [workExperience, setWorkExperience] = useState(false);

  function handleExperienceBtn() {
    setWorkExperience(true);
  }

  return (
    <div className="info">
      <section className="form title-info">
        <h2>Title</h2>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleData}
          value={formData.fullName}
        ></input>
        <input
          type="text"
          placeholder="Job title"
          name="jobTitle"
          onChange={handleData}
          value={formData.jobTitle}
        ></input>
      </section>

      <section className="form summary-info">
        <h2>Summary</h2>
        <textarea
          placeholder="You have 10 seconds to draw their attention. Avoid words like aspiring or junior.."
          onChange={handleData}
          name="summary"
          value={formData.summary}
        ></textarea>
      </section>

      <section className="form work-experience-info">
        <h2>Work Experience</h2>
        {workExperience && (
          <div className="work-experience-container">
            <input
              type="text"
              placeholder="Tech Corp"
              name="techCorp"
              onChange={handleData}
              value={formData.techCorp}
            ></input>
            <input
              type="text"
              placeholder="Duration"
              name="workDuration"
              onChange={handleData}
              value={formData.workDuration}
            ></input>
            <ul></ul>
          </div>
        )}
        <button id="experience-btn" onClick={handleExperienceBtn}>
          Add Experience
        </button>
      </section>

      <section className="form contact-info">
        <h2>Contact</h2>
        <input
          type="text"
          placeholder="Phone number"
          onChange={handleData}
          name="phoneNumber"
          value={formData.phoneNumber}
        ></input>
        <input
          type="text"
          placeholder="Portfolio"
          onChange={handleData}
          name="portfolio"
          value={formData.portfolio}
        ></input>
        <input
          type="text"
          placeholder="Github"
          onChange={handleData}
          name="github"
          value={formData.github}
        ></input>
        <input
          type="text"
          placeholder="Linkedln"
          onChange={handleData}
          name="linkedln"
          value={formData.linkedln}
        ></input>
        <input
          type="text"
          placeholder="Twitter"
          onChange={handleData}
          name="twitter"
          value={formData.twitter}
        ></input>
      </section>

      <section className="form skills-info">
        <h2>Skills</h2>
        <textarea
          placeholder="Type a skill and hit enter"
          value={currentSkill}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
        ></textarea>
      </section>

      <section className="form education-info">
        <h2>Education</h2>
        <input type="text" placeholder="University/ College/ Other"></input>
        <input type="number" placeholder="Start Date (Year)"></input>
        <input type="number" placeholder="End Date (Year)"></input>
        <input type="text" placeholder="Major"></input>
      </section>
    </div>
  );
}

function Cv({ formData, skills }) {
  return (
    <div className="cv-container">
      <button>Download PDF</button>
      <div className="cv">
        <section className="title">
          <h1>{formData.fullName}</h1>
          <span>{formData.jobTitle}</span>
        </section>

        <section className="summary">
          <h2>SUMMARY</h2>
          <p>{formData.summary}</p>
        </section>

        <section className="work-experience">
          <h2>WORK EXPERIENCE</h2>
          <span>{formData.techCorp}</span>
          <span id="duration">{formData.workDuration}</span>
          <ul></ul>
          <h3>Recent Projects</h3>
        </section>

        <section className="volunteering">
          <h2>VOLUNTEERING</h2>
        </section>

        <section className="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>{formData.phoneNumber}</li>
            <li className="web-presence" id="portfolio">
              {formData.portfolio}
            </li>
            <li className="web-presence" id="github">
              {formData.github}
            </li>
            <li className="web-presence" id="linkedin">
              {formData.linkedln}
            </li>
            <li className="web-presence" id="twitter">
              {formData.twitter}
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2>SKILLS</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="education">
          <h2>EDUCATION</h2>
          <span>Univerisy Of Ioannina</span>
          <span> 2014-2024</span>
          <span>Computer Science and Engineering</span>
        </section>
      </div>
    </div>
  );
}
