import styles from '@/componentes/homeTop/HomeTop.module.css'
import Link from 'next/link'

const HomeTop =()=>{
    return(
        <section className={`imgTop  ${styles.top} ${styles.content}`}>

      <style>
        {
            `.imgTop{background: linear-gradient(to right, var(--main-color) 25%, rgba(255, 255, 255, 0)), url(../images/banner_top_v5.jpg) no-repeat center;}`
        }
      </style>

        <div className={styles.maxWidth}>
            <div className={styles.topContent}>
                <div className={styles.text1}>Temos a solução</div>
                <div className={styles.text2}>que a sua empresa precisa</div>
                <div className={styles.text3}>Podemos ajudar a sua empresa!</div>
                <Link href="/Contato.html">Entre em Contato</Link>
            </div>
        </div>
    </section>
    )
} 
export default HomeTop