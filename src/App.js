
import Nav from './Components/Nav.js';
import Home from './Pages/Home.js'
import User from './Pages/User.js'
function App() {
  const i = 1;
  return (
    <div>
      {i === 1 ?  <User /> : <Nav />}
    </div>
   
  )
}

export default App;
