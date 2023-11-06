import Home from '../Pages/Home.js'
import Nav from '../Components/Nav.js'
import Footer from '../Components/Footer.js'
import Model from '../Components/Model.js'

function User(){
    return (
        <div>
            <Nav />
            <Home />
            <Footer/>
            <Model />
        </div>
    )
}

export default User