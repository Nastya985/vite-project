// Content.component.jsx
import styles from './Content.module.css';
import star from './Star.png';
import jacob from './Jacob.png';
import arrow from './arrow.png';

function Content() {
    return (
        <>
            {/* Секция "Meet Your Host" */}
            <section className={styles.meetHost}>
                <div className={styles.meetHostContent}>
                    <div className={styles.meetHostText}>
                    <img src={arrow} alt="arrow" className={styles.arrowIcon} />
                        <span className={styles.subtitle}>Meet your host</span>
                        <h2>Jacob Paulaner</h2>
                        <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                        <p>He's here to help you level up your game by sharing everything he's learned along the way.</p>
                    </div>
                    <img src={jacob} alt="Jacob Paulaner" className={styles.profileImage} />
                </div>
            </section>

      
            {/* Блок с подпиской на обновления */}
                <section className={styles.subscribeSection}>
                
                        <div className={styles.newsletterHeader}>
                            <h3 className={styles.newsletterSubtitle}>Email Newsletter</h3>
                            <h2 className={styles.newsletterTitle}>Subscribe for updates</h2>
                        </div>
                        <form className={styles.subscribeForm}>
                            <input type="text" placeholder="Name" className={styles.formInput} />
                            <input type="email" placeholder="Email" className={styles.formInput} />
                            <button type="submit" className={styles.submitButton}>Submit</button>
                        </form>
                
                </section>

            {/* Отзывы */}
            <section className={styles.reviewsSection}>
                <div className={styles.reviewsGrid}>
                    {[
                        { text: "I can't recommend this podcast enough", author: "Betty Lacey" },
                        { text: "Jacob is the best in the business", author: "Adam Driver" },
                        { text: "A wealth of audio knowledge", author: "Marcus Brown" },
                        { text: "Every episode is a gem!", author: "Jessica Knowl" },
                        { text: "Whoa whoa, let me take some notes!", author: "Scott Adams" },
                        { text: "I've upped my game considerably since I started listening", author: "Steven Blast" }
                        
                    ].map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => <img key={i} src={star} alt="star" />)}
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                            <span className={styles.author}>{review.author}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Content;