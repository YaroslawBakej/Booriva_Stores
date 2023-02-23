import { Link } from "react-router-dom";

function NavItem({name}){
    return(
        <>
        <Link to={'*'}>{name}</Link>
        </>
    )
}

export default NavItem

