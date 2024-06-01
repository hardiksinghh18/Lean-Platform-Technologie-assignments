import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Feedback from './components/Feedback';
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <><AuthContextProvider>
      <Navbar />
      <MainSection />

      <Feedback />
    </AuthContextProvider>
    </>
  );
}

export default App;
