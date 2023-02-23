import style from './Category.module.css'
import ProductItem from './ProductItem'
import products from '../../storage/products'

function Category() {

        return (
            <>
                <div className={style['boorivia-store']}> </div>
                <div className={style['products-wrapper']}>
                    {products.map((el) => <ProductItem key={el.id} id={el.id} name={el.name} price={el.price} path={el.path} />)}
                </div>
            </>

        )
    }
    
export default Category