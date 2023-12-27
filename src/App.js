import './App.css';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RegistrationForm />
    </div>
  );
}

export default App;
