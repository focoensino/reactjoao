import styles from "@/componentes/sobre/Sobre.module.css"
const SobreC =()=>{
    return(
        <section className={`${styles.about} ${styles.content}`}>
        <div className={styles.maxWidth}>
            <h2 className={styles.title}>Sobre Empresa</h2>

            <div className={styles.aboutContent}>
            <div className={` ${styles.column} ${styles.left}`}>
                    <img src="images/premium_v5.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right} `}>
                    <div className={styles.text}>
                        Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
                    </div>
                    <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                        lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                </div>
            </div>


            <div className={styles.aboutContent}>
                <div className={`${styles.column} ${styles.left}` }>
                    <img src="images/premium_v5.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right}`}>
                    <div className={styles.text}>
                        Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
                    </div>
                    <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                        lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                </div>
            </div>

            <div className={styles.aboutContent}>
                <div className={`${styles.column} ${styles.left}`}>
                    <img src="images/premium_v5.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right}`}>
                    <div class="text">
                        Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
                    </div>
                    <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                        lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default SobreC