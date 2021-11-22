import Home from './pages/Home.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ImageGallaryComponent from './pages/image-gallery.component';
import Newtry from './pages/Newtry.js';





const  App= ()=> {
  return (
    <>
    <Newtry/>
  <Router>
  <Routes>
    <Route exact path="/"  element={<Home />} />
    

    
    {/* <Route exact path="/Images"  element={<ImageGallaryComponent />} /> */}
    </Routes>
   <Routes>
    <Route exact path="/Images"  element={<ImageGallaryComponent />} />
    </Routes>
</Router>
    </>
  
  );

}

export default App;
