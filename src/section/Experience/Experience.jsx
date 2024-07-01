import styles from './ExperienceStyles.module.css'
import isage from '../../assets/isage_logo.png'
import kefitup from '../../assets/kefitup-white-logo.webp'
import newmi from '../../assets/newmi-care-logo.avif'
import Experiences from "../../common/Experiences";



function Experience() {
  return (
    <section id="experience" className={styles.container}>
    <h1 className='sectionTitle'>Work Experience</h1>
    {/* <div className={styles.experienceContainer}>
        <Experiences  src={isage} desg="FrontEnd Developer" datetime='Sep-2022 - Apr-2023' exptext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, assumenda molestias. Voluptatem molestiae, ipsa fugiat aut architecto deserunt sed obcaecati expedita animi eius mollitia eligendi velit atque ea nulla accusantium?' />
    </div> */}
        <div className={styles.experienceContainer}>
            <div className={styles.imgbox}>
                <img src={isage} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>FrontEnd Developer</h3>
                <p className={styles.datetime}>Feb-2022 - Sep-2022</p>
                <br />
                <p className={styles.exptext}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quaerat odit, quod aut reiciendis corrupti omnis dignissimos fuga nulla qui, atque ullam doloremque? Doloremque, tempore. Culpa natus aperiam accusamus ratione.</p>
            </div>
        </div>

        <div className={styles.experienceContainer}>
            <div className={styles.imgbox}>
                <img src={kefitup} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>Junior Software Engineer</h3>
                <p className={styles.datetime}>Sep-2022 - Oct-2022</p>
                <br />
                <p className={styles.exptext}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quaerat odit, quod aut reiciendis corrupti omnis dignissimos fuga nulla qui, atque ullam doloremque? Doloremque, tempore. Culpa natus aperiam accusamus ratione.</p>
            </div>
        </div>

        <div className={styles.experienceContainer}>
            <div className={styles.imgbox}>
                <img src={newmi} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>Senior Technology Associate</h3>
                <p className={styles.datetime}>Oct-2022 till date</p>
                <br />
                <p className={styles.exptext}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quaerat odit, quod aut reiciendis corrupti omnis dignissimos fuga nulla qui, atque ullam doloremque? Doloremque, tempore. Culpa natus aperiam accusamus ratione.</p>
            </div>
        </div>
        
    </section>
    
  )
}

export default Experience