import styles from './Banner.module.css';

const subtitleStyle = {
  fontStyle: 'italic',
  fontSize: 'x-large',
  color: "coral"
}

const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img className={styles.logo} src="/img/GlobomanticsLogo.png" alt="logo" />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  )
}

export default Banner;