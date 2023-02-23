import { Link } from 'react-router-dom'


function Price({name}) {
    return (
        <>
         <Link to ={'*'}>
         <p>{name}</p>
         </Link>
        </>
    )
}

export default Price