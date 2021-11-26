import styles from '../styles/Home.module.css'
import Header from './components/header'
import HomeVerticals from './components/home-vertical-content'


export default function Academic() {
  return (
    <div className={styles.container}>

      <main className="main" style={{backgroundColor:"#F4F7F9", height:"100vh"}}>
        <Header/>
        
        <div className="home-content-wrap" style={{display:"flex"}}>
          <HomeVerticals/>
        </div>

      </main>


    </div>
  )
}
