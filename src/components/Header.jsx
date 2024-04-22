import "../styles/Header.css";
import downloadIcon from "../assets/download.png";
import autofillIcon from "../assets/autofill.png";
import githubIcon from "../assets/github.png";

const Header = () => {
  return (
    <section className="header">
      <div className="title-Section">
        <h1>Resume Builder</h1>

        <div className="btn-section">
          <button className="save-button">
            <img className="save-icon" src={downloadIcon} alt="download Icon" />
            <span>Download</span>
          </button>
          <button className="autofill-button">
            <img
              className="autofill-icon"
              src={autofillIcon}
              alt="autofill icon"
            />
            <span>Autofill</span>
          </button>
        </div>
      </div>
      <div className="intro-section">
        <h2>an application by </h2>
        <a href="https://github.com/Rohanchikkalkar" target="_blank">
          <button className="github-button">
            <img className="github-icon" src={githubIcon} alt="github icon" />
            Rohanchikkalkar
          </button>
        </a>
      </div>
    </section>
  );
};
export default Header;
