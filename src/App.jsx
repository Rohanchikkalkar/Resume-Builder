import "./App.css";
import Header from "./components/Header";
import PersonalForm from "./components/PersonalForm";
import EducationalForm from "./components/EducationalForm";
function App() {
  return (
    <main className="mainContent">
      <div className="form">
        <Header></Header>
        <PersonalForm></PersonalForm>
        <EducationalForm></EducationalForm>
      </div>
      <div className="preview">preview</div>
    </main>
  );
}

export default App;
