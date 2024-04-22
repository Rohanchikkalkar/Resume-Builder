import "../styles/EducationalForm.css";
import universityIcon from "../assets/gradcap.png";
import schoolIcon from "../assets/school.png";

const EducationalForm = () => {
  return (
    <section className="education-form-data">
      <h2>Educational Data</h2>

      <form className="educational-form">
        <div className="title-section">
          <img src={universityIcon} alt="university-data" />
          <h3>University</h3>
        </div>
        <input
          type="text"
          name="university"
          placeholder="University"
          className="university-input"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          className="degree-input"
        />
        <input
          type="text"
          name="timeFrame"
          placeholder="Time Frame"
          className="time-frame-input"
        />

        <div className="title-section second-div">
          <img src={schoolIcon} alt="school-data" />
          <h3>School Data</h3>
        </div>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          className="school-input"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree Name"
          className="degree-input"
        />
        <input
          type="text"
          name="timeFrame"
          placeholder="Time Frame"
          className="time-frame-input"
        />
      </form>
    </section>
  );
};
export default EducationalForm;
