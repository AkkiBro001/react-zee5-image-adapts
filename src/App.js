import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from './Pages/Notification/Notification';
import Banner from './Pages/Banner/Banner';
import { Navigation, Notification_Context } from './Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotificationContext from './Context/Notification_Context';


function App() {
  return (
    <BrowserRouter>
      <NotificationContext>
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
      </NotificationContext>
    </BrowserRouter>
  );
}

export default App;
