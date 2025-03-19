import styles from './Header.module.css'
import frame from './Frame.png'
import spotify from './Spotify.png'
import pocket from './Pocket.png'
import sound from './SoundCloud.png'
import apple from './Apple.png'
import overcast from './Overcast.png'

function Header() {
    return (
    <>
        <div className={styles.all}>
            <div className={styles.blk}>
                <img src={frame} alt=""/>
            </div>
        <div className={styles.tak}>
            <h1>Take your podcast to the next level</h1>
            <section className={styles.lis}>
                <h2>Listen on</h2>
                <div className={styles.pic}>
                    <img src={spotify} alt=""/>
                    <img src={pocket} alt=""/>
                    <img src={sound} alt=""/>
                    <img src={apple} alt=""/>
                    <img src={overcast} alt=""/>
                </div>
            </section>
        </div>
    </div>
    </>
    )
    
}

export default Header