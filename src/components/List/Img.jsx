import styles from './Img.module.css'

export default function Img({src}){
    return <img src={src} alt="" className={styles.card_img}/>
}