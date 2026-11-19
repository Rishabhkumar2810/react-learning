import  style from './Header.module.css'
const header= ( )=>{
    return (
        <div className={style.header}>
            <h3>Rishabh</h3>
            <button className={style.btn}>Click me</button>
        </div>
    )
}
export default header;