import "./App.css";
import Header from "./components/Header";
import PersonalForm from "./components/PersonalForm";
import EducationalForm from "./components/EducationalForm";
import PracticalForm from "./components/PracticalForm";
function App() {
  return (
    <main className="mainContent">
      <div className="form">
        <Header></Header>
        <PersonalForm></PersonalForm>
        <EducationalForm></EducationalForm>
        <PracticalForm></PracticalForm>
      </div>
      <div className="preview"></div>
    </main>
  );
}

export default App;
