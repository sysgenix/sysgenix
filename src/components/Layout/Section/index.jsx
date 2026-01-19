import styles from './Section.module.css';

export default function Section({ children, className = '' }) {
  return (
    <section className={`${styles.Section} ${className}`}>
      {children}
    </section>
  );
}
