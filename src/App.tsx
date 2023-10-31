import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from './components/Container';
import Home from './components/Home';
import Register from './components/Register';

function App() {


  return (
    <>
      <Router>
        <header>
          <h1>Clientes</h1>
        </header>
        <NavBar />

        <Container customClass="minHeight">
          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='/clients' element={<Register />}></Route>


          </Routes>
        </Container>


        <Footer />

      </Router>
    </>
  )
}

export default App
