import { useRef, useState } from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme } = useTheme()
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -14
    const rotateY = (x - 0.5) * 14
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)')
  }

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.bgShape} aria-hidden="true" />
      <div className={styles.colorModeContainer}>
        <div
          ref={cardRef}
          className={styles.heroCard}
          style={{ transform }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.hero} src={heroImg} alt="Profile of Zaid Sayed" />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          <span className={styles.nameLine}>Zaid</span>
          <span className={styles.nameLine}>Sayed</span>
        </h1>
        <p className={styles.role}>
          <span className={styles.roleText}>Frontend</span>
          <span className={styles.amp}>&</span>
          <span className={styles.roleText}>Backend</span>
          <span className={styles.roleSub}>Developer</span>
        </p>
        <p className={styles.description}>
          Building modern web apps with a focus on clean UI and solid APIs.
        </p>
        <span className={styles.social}>
          <a href="https://twitter.com/zaidsayed09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="https://github.com/zaidsayed910" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://linkedin.com/in/zaid-sayed-09" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <a href="#contact" className={styles.ctaWrap}>
          <button type="button" className={styles.cta}>
            Let&apos;s Connect
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
