import styles from './Nav.module.css'
import logo from './IMAGE.svg'


function Nav() {
    return (
    <>
        <nav>
            <div className={styles.col}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.col}>
                <button>Home</button>
                <button>Episodes</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </nav>
    </>
    )
    
}

export default Nav