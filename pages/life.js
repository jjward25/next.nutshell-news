import HomeVerticals from '../front-components/home-vertical-content'
import styles from '../styles/Pages.module.scss';

export default function Life() {
  return (
    <div className="container">

      <main className="main">
        
        <div className={styles['home-content-wrap']}>
          <HomeVerticals/>
        </div>

      </main>


    </div>
  )
}
