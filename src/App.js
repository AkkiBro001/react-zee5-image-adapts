import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from './Pages/Notification/Notification';
import Banner from './Pages/Banner/Banner';
import { Navigation, NotificationProvider } from './Components/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <Container className='p-0 position-relative'>
        <Navigation />


        <Routes>
          <Route path='/react-zee5-image-adapts/notification' element={
            <NotificationProvider>
              <Notification />
            </NotificationProvider>
          } />
          <Route path='/react-zee5-image-adapts'
            element={<NotificationProvider>
              <Notification />
            </NotificationProvider>} />
          <Route path='/react-zee5-image-adapts/banner' element={<Banner />} />
        </Routes>





      </Container>
    </BrowserRouter>
  );
}

export default App;
