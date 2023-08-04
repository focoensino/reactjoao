import styles from "@/componentes/menu/Menu.module.css"
import Link from "next/link"
import { useState } from "react"
import { FaBars } from 'react-icons/fa';

const Menu =()=>{
    const[isActive,setIsActive] = useState(false)
    const activeMenu =()=>{
        setIsActive(!isActive)
        console.log(isActive)
    }

return(
    <nav className={styles.navbar}>
    <div className={styles.maxWidth}>
        <div className={styles.logo}>
            <Link href="/">Foco</Link>
        </div>

        <ul className={`${styles.menu} ${isActive ? styles.active:''}  `} id={styles.menuSite}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="Sobre">Sobre Empresa</Link></li>
            <li><Link href="Contato">Contato</Link></li>
        </ul>
        <div className={styles.menuBtn} id={styles.menuBtn}>
            {/* <i className="fa-solid fa-bars" id="menu-icon"></i> */}
            
            <i id={styles.menuIcon}onClick={activeMenu}><FaBars/></i>
        </div>
    </div>
</nav>
)
}

export default Menu