import style from './Ordering.module.css'
import { TextField } from '@mui/material';


function Ordering() {
    return (
        <div>
            <div className={style['contact-details']}>
                <div className={style['right-column']}>
                    <div>
                        <div className={style['one']}></div>
                        <div className={style['vector']}></div>
                    </div>
                    <p>Контактные данные</p>
                </div>
                <div className={style['form']}>
                    <TextField id="outlined-basic" label="Имя" variant="outlined" />
                    <TextField id="outlined-basic" label="Фамилия" variant="outlined" />
                    <TextField id="outlined-basic" label="+375(хх)ххх-хх-хх" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </div>
            </div>
            <div className={style['delivery']}>
                <div className={style['right-column']}>
                    <div>
                        <div className={style['two']}></div>
                        <div className={style['vector']}></div>
                    </div>
                    <p>Контактные данные</p>
                </div>
                
            </div>
            <div></div>

        </div>

    )
}

export default Ordering