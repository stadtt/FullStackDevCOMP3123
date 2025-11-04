import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserSignupForm from './components/UserSignUpForm';

function App() {
  return (
    <div>
      <h1>Week10 | React form and events example </h1>
      {/*UserForm*/}
      <UserSignupForm></UserSignupForm>
    </div>
  );
}

export default App;
