import style from './Basket.module.css'
import Item from './Item'
import { item } from '../../data'
import { updateItem } from '../../data'
import { useState } from 'react'

function Basket() {

    const [card, setCard] = useState(item)
    function deleteItem(id) {
        setCard((card) => {
            const newItem = card.filter((el) => { return id !== el.id })
            return newItem
        })
        updateItem(id)

    }

    return (
        <>

            <div className={style['head']}>
                <div></div>
            </div>
            <div className={style['item-in-card']}>
                {card.map((el, index) => <Item key={index} deleteItem={deleteItem} id={el.id} name={el.name} description={el.description} size={el.size} price={el.price} />)}

            </div>
            <div className={style['ordering']}>
                <div className={style['total-count']}>
                    <p className={style['qty']}>Всего</p>
                    <p className={style['price']}>Сумма заказа</p>
                </div>
                <div className={style['total-price']}>
                    <p className={style['count']}>Кол-во товаров</p>
                    <p className={style['total-price']}>$</p>
                </div>
            </div>
            <div className={style['checkout']}>
                <div className={style['checkout-img']}>
                    <p>Оформить заказ</p>
                </div>
            </div>
        </>
    )
}

export default Basket