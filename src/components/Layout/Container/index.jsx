import styles from './container.module.css';

export default function Container({ children, full = false, className = '' }) {
  return (
    <div className={`${full ? styles['container-full'] : styles.container} ${className}`}>
      {children}
    </div>
  );
}
