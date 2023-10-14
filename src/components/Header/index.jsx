import userIcon from './user-icon.jpg'
import logo from './logo.jpeg'
import styles from './Header.module.css'

function Header (props) {
  const { isLogin, navList } = props

  const mapLinks = (link, i) => (
    <li key={i}>
      <a href={link.src}>{link.aTitle}</a>
    </li>
  )

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='logo' />

      <nav>
        <ul className={styles.linksList}>{navList.map(mapLinks)}</ul>
      </nav>

      {isLogin ? (
        <img className={styles.userImg} src={userIcon} alt='user' />
      ) : (
        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  )
}

export default Header
