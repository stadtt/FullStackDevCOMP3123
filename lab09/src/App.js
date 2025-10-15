import logo from './logo.svg';
import './App.css';
import College from './components/college/college';
import Student from './components/student/student';
import StudentID from './components/student/studentID';
import Title from './components/title/title';

function App() {
  const titleObj = {
       appName: "Welcome to FullStack Development -1",
        labName: "React JS Programming week09 Lab Exercise"

  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title  title = { titleObj } />
        <StudentID studentId="101500534"/>
        <Student   fnm="Shaffaq" lnm="hai"/>
        <College/>
      </header>
    </div>
  );
}

export default App;
