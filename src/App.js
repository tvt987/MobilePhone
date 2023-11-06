
import Nav from './Components/Nav.js';
import User from './Pages/User.js'
import ProductDetail from './Pages/ProductDetail.js';
function App() {
  const i = 1;
  return (
    <div>
      {i === 1 ?  <User /> : <Nav/>}
    </div>
   
  )
}

export default App;
