import style from "./Header.module.css"
import NavItem from './NavItem.js'
import { Link } from "react-router-dom"

function Header() {
    let arr = [
        'Новинки',
        'Платья',
        'Верх',
        'Низ',
        'Куртки',
        'Мелочи',
        'Костюмы',
        'Boorivegirls',
    ]
    return (
        <div className={style['wrapper']}>
            <div className={style['header-wrapper']}>
                <Link to={'/'}><div className={style['logo']}></div></Link>
                <Link to={'/BasketPage'}><div className={style['basket']}></div></Link>
            </div>

            <nav>
                {arr.map((el, index) => <NavItem key={index} name={el} />)}
            </nav>

        </div >
    )
}

export default Header