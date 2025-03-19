import styles from './Footer.module.css';
import inst from './inst.png';
import twit from './twit.png';
import face from './face.png';
import spotify from './Spotify.png';
import pocket from './Pocket.png';
import sound from './SoundCloud.png';
import apple from './Apple.png';
import overcast from './Overcast.png';
import logo from './IMAGE.svg'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Логотип и социальные сети */}
                <div className={styles.left}>
                    <div className={styles.footerLogo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={styles.social}>
                        <a href="#" className={styles.socialLink}>
                            <img src={inst} alt="Instagram" className={styles.socialIcon} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src={twit} alt="Twitter" className={styles.socialIcon} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src={face} alt="Facebook" className={styles.socialIcon} />
                        </a>
                    </div>
                </div>

                {/* Навигация */}
                <div className={styles.footerLinks}>
                    <a href="#" className={styles.navLink}>Home</a>
                    <a href="#" className={styles.navLink}>About</a>
                    <a href="#" className={styles.navLink}>Episodes</a>
                    <a href="#" className={styles.navLink}>Contact</a>
                </div>

                {/* Дополнительная информация */}
                <div className={styles.info}>
                    <p>Style Guide</p>
                    <p>Instructions</p>
                    <p>Changelog</p>
                    <p>Credit</p>
                    <p>Powered by Webflow</p>
                    <p>Licenses</p>
                </div>

                {/* Иконки подкастов */}
                <div className={styles.footerSocial}>
                    <a href="#" className={styles.podcastLink}>
                        <img src={spotify} alt="Spotify" className={styles.podcastIcon} />
                    </a>
                    <a href="#" className={styles.podcastLink}>
                        <img src={pocket} alt="Pocket Casts" className={styles.podcastIcon} />
                    </a>
                    <a href="#" className={styles.podcastLink}>
                        <img src={sound} alt="SoundCloud" className={styles.podcastIcon} />
                    </a>
                    <a href="#" className={styles.podcastLink}>
                        <img src={apple} alt="Apple Podcasts" className={styles.podcastIcon} />
                    </a>
                    <a href="#" className={styles.podcastLink}>
                        <img src={overcast} alt="Overcast" className={styles.podcastIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;