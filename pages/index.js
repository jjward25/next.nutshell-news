import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import TwitterBox from './components/twitter-home'
import CurrentEvents from './components/current-events-card'
import HomeVerticals from './components/home-vertical-content'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nutshell News</title>
        <meta name="description" content="Adult Education for the Modern World" />
        <link rel="icon" href="/acorn.ico" />
      </Head>

      

      <main className="main" style={{backgroundColor:"#F4F7F9"}}>
        <Header/>
        
        <div className="home-top" style={{display:"flex"}}>
          <TwitterBox/>
        
          <div className="current-events"> 
            <div className='category-header'>Current Events </div>
            <div className="ce-card-wrap" style={{display:"flex"}}>
              <CurrentEvents/>
            </div>
          </div>
        </div>
        
        <div className="home-content-wrap" style={{display:"flex"}}>
          <HomeVerticals/>
        </div>

      </main>


    </div>
  )
}
