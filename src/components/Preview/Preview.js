import style from './Preview.module.css'
import AdvantageItem from './AdvantageItem.js'
import Price from './Price'
import Info from './Info'

function Preview() {

    const advantages = [{
        id: 1,
        image: 'image-1',
        logo: 'Отправка день в день',
        paragraph: 'При заказе до 18:00'
    },
    {
        id: 2,
        image: 'image-2',
        logo: 'Легкий возврат/обмен',
        paragraph: 'В течении 14 дней'
    },
    {
        id: 3,
        image: 'image-3',
        logo: 'Сделано в Украине',
        paragraph: 'Прям в Киеве'
    }]

    const price = [
        '1 099 ₴',
        '1 299 ₴',
        '2 499 ₴',
        '899 ₴'
    ]
    const info = [
        'Cвитшот вставка клетка',
        'Платье прозрачное в цветочек черное',
        'Бомбер Gone Crazy хаки',
        'Платье-футболка рыбы в аквариуме'
    ]

    return (
        <div className={style['wrapper']}>
            <div className={style['women']}></div>
            <div className={style['price']}>
                {price.map((el, index) => <Price key={index} name={el} />)}
            </div>
            <div className={style['info']}>
                {info.map((el, index) => <Info key={index} name={el} />)}
            </div>
            <div className={style['banner']}></div>
            <div className={style['booriva']}></div>

            <div className={style['advantages']}>
                {advantages.map((el, index) => <AdvantageItem key={index} logo={el.logo} paragraph={el.paragraph} image={el.image} />)}
            </div>
        </div>
    )
}

export default Preview