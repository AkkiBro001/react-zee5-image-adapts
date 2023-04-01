import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from './Pages/Notification/Notification';
import Banner from './Pages/Banner/Banner';
import { Navigation } from './Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
      
        <Container className='p-0 position-relative'>
          <Navigation />



          <Routes>
            <Route path='/react-zee5-image-adapts/notification' element={

              <Notification />

            } />
            <Route path='/react-zee5-image-adapts'
              element={
                <Notification />
              } />
            <Route path='/react-zee5-image-adapts/banner' element={<Banner />} />
          </Routes>




        </Container>
     
    </BrowserRouter>
  );
}

export default App;
