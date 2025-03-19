import styles from './LatestEpisodes.module.css';
import gear from './Gear.jpg';
import tips from './Tips.jpg';
import gear1 from './Gear1.png';

function Last() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Latest episodes</h2>
                <button className={styles.viewAll}>View all episodes</button>
            </div>
            
            <div className={styles.episodesContainer}>
                {/* Episode 1 */}
                <div className={styles.episode}>
                    <img src={gear} alt="Gear" className={styles.thumbnail}/>
                    <div className={styles.content}>
                        <span className={styles.tag}>Gear</span>
                        <div className={styles.episodeInfo}>
                            <p>Episode 3</p>
                            <h3>Should you get outboard audio gear?</h3>
                        </div>
                        <p className={styles.description}>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here's our reasons why you might want to consider picking something up.</p>
                        <button className={styles.button}>View Episode Details</button>
                    </div>
                </div>

                {/* Episode 2 */}
                <div className={styles.episode}>
                    <img src={tips} alt="Tips" className={styles.thumbnail}/>
                    <div className={styles.content}>
                        <span className={styles.tag}>Tips & Tricks</span>
                        <div className={styles.episodeInfo}>
                            <p>Episode 2</p>
                            <h3>Mic tricks to take you to the next level</h3>
                        </div>
                        <p className={styles.description}>Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
                        <button className={styles.button}>View Episode Details</button>
                    </div>
                </div>

                {/* Episode 3 */}
                <div className={styles.episode}>
                    <img src={gear1} alt="Microphone" className={styles.thumbnail}/>
                    <div className={styles.content}>
                        <span className={styles.tag}>Gear</span>
                        <div className={styles.episodeInfo}>
                            <p>Episode 1</p>
                            <h3>The best microphone under $200</h3>
                        </div>
                        <p className={styles.description}>With so many microphones on the market, how are you supposed to know what's the best? Take a look at our top picks.</p>
                        <button className={styles.button}>View Episode Details</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Last;