import { useState, useEffect } from 'react'
import styles from './NavStyles.module.css'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { useTheme } from '../../common/ThemeContext'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const themeIcon = theme === 'light' ? sun : moon

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.logo}>
            ZS
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileOpen ? styles.open : ''} />
            <span className={mobileOpen ? styles.open : ''} />
            <span className={mobileOpen ? styles.open : ''} />
          </button>
          <ul className={`${styles.links} ${mobileOpen ? styles.mobileOpen : ''}`}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={styles.link}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className={styles.themeBtn}
                aria-label="Toggle theme"
              >
                <img src={themeIcon} alt="" width={22} height={22} />
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={styles.scrollProgress}
          style={{ width: `${scrollProgress}%` }}
        />
      </header>
    </>
  )
}

export default Nav
