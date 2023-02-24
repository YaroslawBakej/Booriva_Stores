import style from './Category.module.css'
import { addItem, updateItem } from './../../data'
import products from '../../storage/products'
import { useEffect } from 'react'

function ProductItem({ id, name, price, path, color }) {
    
    function addToBasket() {
        if(!products[id].flag){
            addItem({ id, name, price, path })
        }else{
            updateItem(id)
        }
        console.log(products[id].flag);
    }


    return (
        <>
            <div className={style['line-shop']}>
                <div className={style['block']}>
                    <div className={style["block-image"]} >
                        <img alt={name} className={style['img']} src={require(`../../storage/assets/${path}`)}></img>
                        <img alt=" " onClick={addToBasket} className={style[`like`]} src={require(`../../storage/assets/${color}`)}></img>
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