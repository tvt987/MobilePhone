import Home from '../Pages/Home.js'
import Nav from '../Components/Nav.js'
import Footer from '../Components/Footer.js'
import Model from '../Components/Model.js'
import ProductDetail from './ProductDetail.js'

function User(){
    return (
        <div>
            <Nav />
            <ProductDetail/>
            <Footer/>
            <Model />
        </div>
    )
}

export default User