import style from './Category.module.css'
import { item } from './../../data'
import { addItem } from './../../data'


function ProductItem({ id, name, price, path }) {


    function addToBasket(event) {
        let flag = true
        const keys = item.map(el => el.id)
        if (!keys.includes(id)) addItem({ id, name, price, path })
        if (flag) {
            event.target.style = 'background-color: red'
            flag=false
        }
        else {
            event.target.style = 'background-color: none'
            flag=true
        }
    }

    return (
        <>
            <div className={style['line-shop']}>
                <div className={style['block']}>
                    <div className={style["block-image"]} >
                        <img alt={name} className={style['img']} src={require(`../../storage/assets/${path}`)}></img>
                        <div onClick={addToBasket} className={style['like']}></div>
                    </div>
                    <hr></hr>
                    <div className={style['title-flex']}>
                        <h1>{name}</h1>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductItem