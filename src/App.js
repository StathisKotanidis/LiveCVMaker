import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    summary: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData({
      ...formData, // Keep the existing form data
      [name]: value, // Dynamically update the field that was changed
    });
  };

  return (
    <div className="ui-container">
      <Form formData={formData} handleData={handleData} />
      <Cv formData={formData} />
    </div>
  );
}

function Form({ formData, handleData }) {
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
          placeholder="job title you applying for "
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
      </section>
    </div>
  );
}

function Cv({ formData }) {
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

        <section>
          <h2>WORK EXPERIENCE</h2>
          <span>Software Engineer at 100devs, Los Angeles, CA</span>
          <span id="duration">January 2019- Present</span>
          <ul>
            <li>
              Collaborated with a team of developers to build modern and
              responsive web applications using best practices
            </li>
            <li>Built semantically structured full stack web applications</li>
            <li>
              Applied agile methodologies like SCRUM for project management
            </li>
          </ul>

          <h3>Recent Projects</h3>
          <p>
            Hip Coffee Co (Fullstack Web App) – Cashier can take coffee orders
            from customers with their names. Baristas can login to the app and
            see orders that have been made, mark them as complete. Orders that
            have been completed will note which barista completed the order.
          </p>
          <p>
            Happy Notes (Fullstack Web App) – Users can login to their profile
            and find their list of notes. They can add new notes through an
            input, which they can then edit or delete all notes in their
            profile.
          </p>
          <p>100Hours Project –</p>
          <p>
            Other Projects: Small Lakes Casino Virtual Slot Machine, Los Angeles
            StarGazers Society APOD Web App with NASA API integration, On-demand
            background color changer for Partnered Twitch streamer, and many
            more
          </p>

          <span>Full Stack Web Developer at Bob's Consulting | Boston, MA</span>
          <span id="duration">January 2018- December 2019</span>
          <p>
            Created full stack web applications and static websites for
            different clients across small and medium size businesses. Also,
            consulted on SEO and social media strategy. Some clients included:
          </p>
          <span>Actual Client -</span>
        </section>
      </div>
    </div>
  );
}
