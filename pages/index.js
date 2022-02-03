import Head from 'next/head'
import styles from '../styles/Pages.module.scss';
import TwitterBox from '../front-components/twitter-home'
import CurrentEvents from '../front-components/current-events-card'
import HomeVerticals from '../front-components/home-vertical-content'


export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Nutshell News</title>
        <meta name="description" content="Adult Education for the Modern World" />
        <link rel="icon" href="/acorn.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href={`https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Contrail+One&family=Fredericka+the+Great&family=Julius+Sans+One&family=Montserrat:wght@500;600;700&family=Raleway+Dots&family=Raleway:wght@500&family=Sanchez&family=Stick+No+Bills:wght@500&display=swap`} rel="stylesheet"/>
      </Head>

      

      <main className={styles['main']}>   
           
        <div className={styles['home-top']}>
          <TwitterBox/>
        
          <div className={styles['current-events']}> 
            <div className={styles['font-category-header']}>Current Events </div>
            <div className={styles['ce-card-wrap']}>
              <CurrentEvents/>
            </div>
          </div>
        </div>
        
        <div className={styles['home-content-wrap']}>
          <HomeVerticals/>
        </div>

      </main>


    </div>
  )
}
