import styles from '@/componentes/homePremium/HomePremium.module.css'
import Link from 'next/link'


const HomePremium =()=>{
    return(
        <section className={`  ${styles.premium} ${styles.content}`}>

        <div className={styles.maxWidth}>
            <h2 className={styles.title}>Serviço Premium</h2>
            <div className={styles.premiumContent}>
                <div className={` ${styles.column} ${styles.left}`}>
                 <img src="images/premium_v5.jpg" alt="Serviço premium"/>
                     </div> 

                <div className={`${styles.column} ${styles.right}`}>

                    <div className={styles.text}>
                        Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
                    </div>
                    <p>
                        Ut tempus dui in fringilla consequat. Donec accumsan feugiat venenatis. Vestibulum blandit lectus nec lacus tincidunt tempus. Praesent porta erat non ligula egestas, eget imperdiet justo egestas. Pellentesque cursus risus nec leo tincidunt fringilla.
                        Suspendisse faucibus aliquam vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis
                        elit vel tellus viverra dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a mattis sem. Cras aliquam fermentum viverra.
                    </p>
                    <Link href="/Contato.html"> Contato</Link>
                </div>
            </div>
            
      
        </div>
    </section>
    )
} 
export default HomePremium