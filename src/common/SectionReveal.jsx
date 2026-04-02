import { useInView } from './useInView'

export default function SectionReveal({ children, className = '', as: Component = 'div', delay = 0 }) {
  const [ref, isInView] = useInView()
  const delayClass = delay ? `revealDelay${delay}` : ''
  return (
    <Component
      ref={ref}
      className={`${className} reveal ${isInView ? 'inView' : ''} ${delayClass}`.trim()}
    >
      {children}
    </Component>
  )
}
