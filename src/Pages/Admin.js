import FooterAdmin from "../Components/FooterAdmin";
import NavAdmin from "../Components/NavAdmin";
import Discount from "./Discount";
import Statistical from "./Statistical.js"

function Admin(){
    return (
        <div>
            <NavAdmin />
            <Statistical />
            <FooterAdmin/>
        </div>
    )
}

export default Admin