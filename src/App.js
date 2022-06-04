import './App.css';
import { Routes, Route } from "react-router-dom";

import { Footer } from './components/Footer';
import { Header } from "./components/Header";

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotePage } from './pages/NotePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UserPage } from './pages/UserPage';


function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/note/:id' element={<NotePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/user/:id' element={<UserPage />} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
