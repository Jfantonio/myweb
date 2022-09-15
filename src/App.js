
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilo.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './layout/Inicio';
import About from './layout/About';
import PageError from './layout/PageError';
import { Container, Row, Col } from 'react-bootstrap';
import Navegacion from './component/Navegacion';


function App() {
  return (
    <Container fluid="md" >
      <Row>
        <Col>
          {/* ******************************** */}
          <BrowserRouter>
           <Navegacion />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<PageError />} />
            </Routes>
          </BrowserRouter>
          {/* ******************************** */}

        </Col>
      </Row>
    </Container>
  );
}

export default App;
