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
    startDate: "",
    endDate: "",
  });

  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const [workBulletPoints, setWorkBulletPoints] = useState([]);
  const [currentBulletPoint, setCurrentBulletPoint] = useState("");

  const handleWorkTextArea = (e) => {
    setCurrentBulletPoint(e.target.value);
  };

  const handleSkillsTextArea = (e) => {
    setCurrentSkill(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentSkill.trim() !== "") {
      e.preventDefault();
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
  };

  const handleWorkKeyDown = (e) => {
    if (e.key === "Enter" && currentBulletPoint.trim() !== "") {
      e.preventDefault();
      setWorkBulletPoints([...workBulletPoints, currentBulletPoint]);
      setCurrentBulletPoint("");
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
        handleSkillsTextArea={handleSkillsTextArea}
        currentBulletPoint={currentBulletPoint}
        handleWorkKeyDown={handleWorkKeyDown}
        handleWorkTextArea={handleWorkTextArea}
      />
      <Cv
        formData={formData}
        skills={skills}
        workBulletPoints={workBulletPoints}
      />
    </div>
  );
}

function Form({
  formData,
  handleData,
  currentSkill,
  handleSkillsTextArea,
  handleKeyDown,
  currentBulletPoint,
  handleWorkKeyDown,
  handleWorkTextArea,
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
            <textarea
              placeholder="Type a bullet point and hit enter"
              id="work-textarea"
              value={currentBulletPoint}
              onChange={handleWorkTextArea}
              onKeyDown={handleWorkKeyDown}
            ></textarea>
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
          onChange={handleSkillsTextArea}
          onKeyDown={handleKeyDown}
        ></textarea>
      </section>

      <section className="form education-info">
        <h2>Education</h2>
        <input
          type="text"
          placeholder="University/ College/ Other"
          name="university"
          value={formData.university}
          onChange={handleData}
        ></input>
        <input
          type="number"
          placeholder="Start Date (Year)"
          name="startDate"
          value={formData.startDate}
          onChange={handleData}
        ></input>
        <input
          type="number"
          placeholder="End Date (Year)"
          name="endDate"
          value={formData.endDate}
          onChange={handleData}
        ></input>
        <input
          type="text"
          placeholder="Major"
          name="major"
          value={formData.major}
          onChange={handleData}
        ></input>
      </section>
    </div>
  );
}

function Cv({ formData, skills, workBulletPoints }) {
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
          <span id="techCorp">{formData.techCorp}</span>
          <span id="duration">{formData.workDuration}</span>
          <ul className="work-description">
            {workBulletPoints.map((bulletpoint, index) => (
              <li key={index}>{bulletpoint}</li>
            ))}
          </ul>
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
          <span id="university">{formData.university}</span>
          <p id="uni-dates">
            {formData.startDate} - {formData.endDate}
          </p>
          <span id="major">{formData.major}</span>
        </section>
      </div>
    </div>
  );
}

function test1() {
  return <div>delete!!!!!!!!</div>;
}
