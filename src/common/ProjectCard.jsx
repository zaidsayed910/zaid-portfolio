import { useRef, useState } from 'react'
import styles from './ProjectCardStyles.module.css'

function ProjectCard({ src, link, h3, p, index = 0 }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -10
    const rotateY = (x - 0.5) * 10
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    )
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)')
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      ref={cardRef}
      data-delay={index}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardInner}>
        <div className={styles.imgWrap}>
          <img src={src} alt={`${h3} project`} />
        </div>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  )
}

export default ProjectCard
