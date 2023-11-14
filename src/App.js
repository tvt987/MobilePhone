
import Nav from './Components/Nav.js';
import User from './Pages/User.js'
import ProductDetail from './Pages/ProductDetail.js';
import Admin from './Pages/Admin.js'
import { BrowserRouter } from 'react-router-dom';
function App() {
  const i = 1;
  return (
      <div>
      {i === 1 ?  <User /> : <Admin/>}
    </div>
  )
}

export default App;
