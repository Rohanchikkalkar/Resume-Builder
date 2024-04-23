import "../styles/PracticalForm.css";
import deleteIcon from "../assets/remove.svg";
import addIcon from "../assets/plus.png";
import workIcon from "../assets/work.png";
import skillsIcon from "../assets/skills.png";
import certificationsIcon from "../assets/website.png";
import { useState } from "react";

const PracticalForm = () => {
  const [workExperiences, setWorkExperiences] = useState([{}]);
  const [skills, setSkills] = useState(["", "", ""]);
  const [certifications, setCertifications] = useState([{}]);

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {}]);
  };
  const deleteWorkExperience = (index) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const deleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
  const addCertification = () => {
    setCertifications([...certifications, {}]);
  };
  const deleteCertification = (index) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  return (
    <section className="practical-data-form">
      {/* pRACTICAL EXPIERENCE */}
      <h2>Practical Experience</h2>
      {workExperiences.map((_, index) => (
        <div key={index} className="expierence-practical-form">
          <div className="title-section">
            <img src={workIcon} alt="work icon" />
            <h3>Work Experience #{index + 1}</h3>
            <button
              onClick={() => deleteWorkExperience(index)}
              className="delete-button"
            >
              <img
                src={deleteIcon}
                alt="delete-expierence"
                className="delete-img"
              />
            </button>
          </div>

          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Position" />
          <textarea placeholder="Main Occupation/Daily Tasks"></textarea>

          <input type="text" placeholder="Start Date of Employment" />
          <input type="text" placeholder="End Date of Employment" />
        </div>
      ))}
      <button onClick={addWorkExperience} className="new-button">
        <img src={addIcon} alt="add image" className="addImg" />
        New
      </button>
      <div className="title-section">
        <img src={skillsIcon} alt="work icon" />

        {/* SKILLS AND TECHNOLOGY */}
        <h3>Skills and Technologies</h3>
      </div>
      {skills.map((_, index) => (
        <div key={index} className="skills-form">
          <input type="text" className="skill-field" />
          <button onClick={() => deleteSkill(index)} className="delete-button">
            {" "}
            <img
              src={deleteIcon}
              alt="delete-expierence"
              className="delete-img"
            />
          </button>
        </div>
      ))}
      <button onClick={addSkill} className="new-button">
        <img src={addIcon} alt="add image" className="addImg" />
        New
      </button>
      {/* here now add a form that takes maximum 3 certifications */}
      <div className="title-section">
        <img src={certificationsIcon} alt="certifications icon" />
        <h3>Certifications</h3>
      </div>
      {certifications.map((_, index) => (
        <div key={index} className="certifications-form">
          <input type="text" placeholder="Course Name" />
          <input type="text" placeholder="Source" />
          <input type="text" placeholder="Course Completion Date" />
          <button
            onClick={() => deleteCertification(index)}
            className="delete-button delete-course"
          >
            <img
              src={deleteIcon}
              alt="delete certification"
              className="delete-img"
            />
          </button>
        </div>
      ))}
      <button
        onClick={addCertification}
        disabled={certifications.length >= 3}
        className="new-button"
      >
        <img src={addIcon} alt="add image" className="addImg" />
        New
      </button>
    </section>
  );
};

export default PracticalForm;
