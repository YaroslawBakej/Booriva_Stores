import style from './Category.module.css'
import { addItem, updateItem } from './../../data'
import products from '../../storage/products'
import { useState } from 'react'

function ProductItem({ id, name, price, path, color }) {
    
    const [like, setLike] = useState('like')

    function addToBasket() {
        if(!products[id].flag){
            addItem({ id, name, price, path })
            setLike('like-red');
        }else{
            updateItem(id)
            setLike('like');
        }
        console.log(products[id].color, products[id].id, products[id].flag );
    }


    return (
        <>
            <div className={style['line-shop']}>
                <div className={style['block']}>
                    <div className={style["block-image"]} >
                        <img alt={name} className={style['img']} src={require(`../../storage/assets/${path}`)}></img>
                        <img alt=" " onClick={addToBasket} className={style[like]} src={require(`../../storage/assets/${color}`)}></img>
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