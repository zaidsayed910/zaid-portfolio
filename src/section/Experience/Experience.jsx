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
                {/* <p className={styles.datetime}>2022 - 2022</p> */}
                <br />
                <p className={styles.exptext}>
                   <ul>
                    <li>Developed a Single page app, improving customer experience by 10%.</li>
                    <li>Participated in each step of the product development process from ideation to development for the improvement of features.</li>
                    <li>Integration of RESTful APIs of Django.</li>
                    <li>Developed UI Designs and worked on UX for Enhancement of product.</li>
                    <li>Converted Photoshop and Corel Files into HTML Templates.</li>
                    </ul> 
                </p>
                <p className={styles.exptech}>
                Technology’s Worked with in Project :- Vue.js, Vuex, Quasar framework, javascript, Scss, Sass, nodejs, and postman tool.
                </p>
            </div>
        </div>

        <div className={styles.experienceContainer}>
            <div className={styles.imgbox}>
                <img src={kefitup} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>Junior Software Engineer</h3>
                {/* <p className={styles.datetime}>Sep-2022 - Oct-2022</p> */}
                <br />
                <p className={styles.exptext}>
                   <ul>
                    <li>Developing Responsive designs from Figma or XD to Html and Css code.</li>
                    <li>Developing Pixel perfect UI designs.</li>
                    <li>Developing or designing on wordpress.</li>
                    <li>Design and implementation/Integration of RESTful APIs.</li>
                    <li>Developed UI Designs and worked on UX for Enhancement of product.</li>
                    </ul> 
                </p>
                <p className={styles.exptech}>
                Technology’s Worked with in Project :- HTML5, CSS3, Bootstrap 3/5, Javascript,vuejs, Wordpress.
                </p>
                </div>
        </div>

        <div className={styles.experienceContainer}>
            <div className={styles.imgbox}>
                <img src={newmi} alt="" className={styles.corpImg} />
            </div>
            <div className={styles.textbox}>
                <h3 className={styles.designation}>Senior Technology Associate</h3>
                <p className={styles.datetime}>Current</p>
                <br />
                <p className={styles.exptext}>
                   <ul>
                    <li>Working on Saas based platform.</li>
                    <li>Developed a platform technology solutions, and automated internal processes .</li>
                    <li>Designed and implemented web applications along with 3rd party software integrations as a web team liaison for all inter-departmental and customer facing projects.</li>
                    <li>Redesigned 2-year old Saas application with full UI/UX based in 6 months for Enhancement of product.</li>
                    <li>Created non-technical descriptions of operations and workflow to enable non-coding team to function with minimal interruptions.</li>
                    <li>Design and implementation/Integration of RESTful APIs.</li>
                    </ul> 
                </p>
                <p className={styles.exptech}>
                Technology’s Worked with in Project :- HTML5, CSS3, Bootstrap 3/5, Javascript, Angularjs.
                </p>
                </div>
        </div>
        
    </section>
    
  )
}

export default Experience