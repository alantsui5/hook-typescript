import styles from 'styles/index.module.scss'
import Counter from 'components/counter'
import logo from 'public/logo.svg'

const IndexPage = () => (
  <div className={styles.App}>

      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
)

export default IndexPage
