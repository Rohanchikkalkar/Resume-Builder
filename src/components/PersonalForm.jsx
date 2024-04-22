import "../styles/PersonalForm.css";
const PersonalForm = () => {
  return (
    <section className="personal-data-form">
      <h2>Personal Data</h2>
      <form className="personal-form">
        <div className="name-section">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="firstName-field"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="lastName-field"
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="address-field"
          />
        </div>
        <div>
          <input
            type="url"
            name="website"
            placeholder="Website"
            className="website-field"
          />
        </div>
        <div className="contact-section">
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="number" placeholder="Number" />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Tell me something about yourself!"
          ></textarea>
        </div>
      </form>
    </section>
  );
};
export default PersonalForm;
