import style from "./Basket.module.css"

function Item({id, name, size,price, deleteItem}){
    return(
        <>
        <div className={style['item_6']}>
                    <div className={style['img']}></div>
                    <div className={style['text']}>
                        <p className={style['description']}>{name}</p>
                        <p className={style['size']}>{size}</p>
                        <p className={style['price']}>{price}</p>
                    </div>
                    <div onClick={()=>{deleteItem(id)}} className={style['delete']}></div>
                </div>
        </>
    )
}

export default Item