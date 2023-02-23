import { Link } from 'react-router-dom'

function Info({ name }) {
    return (
        <>
            <Link to={'*'}>
                <p>{name}</p>
            </Link>
        </>
    )
}

export default Info