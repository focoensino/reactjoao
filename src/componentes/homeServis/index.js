import styles from '@/componentes/homeServis/HomeServis.module.css'
import { FaWifi } from 'react-icons/fa' ;
import { FaRocket } from 'react-icons/fa' ;
import { FaHandshake } from 'react-icons/fa' ;

const HomeServis =()=>{
    return(
        <section className={`  ${styles.services} ${styles.content}`}>

        <div className={styles.maxWidth}>
            <h2 className={styles.title}>Serviços</h2>
            <div className={styles.servContent}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <i><FaWifi/></i>
                        <div className={styles.text}>Wifi veloz</div>
                        <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.box}>
                        <i><FaRocket/></i>
                        <div className={styles.text}>Espaço inspirador</div>
                        <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.box}>
                        <i><FaHandshake/></i>
                        <div className={styles.text}>Reuniões</div>
                        <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
} 
export default HomeServis