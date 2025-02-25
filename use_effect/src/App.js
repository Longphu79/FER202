import logo from './logo.svg';
import './App.css';
import UserPosts from './components/UserPosts';
import ValidatedInput from './components/ValidatedInput';
import LoginForm from './components/LoginForm';
import FormValidation from './components/FormValidation';

function App() {
  return (
    <div className="App">
      <ValidatedInput/>
      <LoginForm/>
      <FormValidation/>
    </div>
  );
}

export default App;
