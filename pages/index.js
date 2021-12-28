import Head from 'next/head'
import TwitterBox from '../components/twitter-home'
import CurrentEvents from '../components/current-events-card'
import HomeVerticals from '../components/home-vertical-content'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nutshell News</title>
        <meta name="description" content="Adult Education for the Modern World" />
        <link rel="icon" href="/acorn.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href={`https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Contrail+One&family=Fredericka+the+Great&family=Julius+Sans+One&family=Montserrat:wght@500;600;700&family=Raleway+Dots&family=Raleway:wght@500&family=Sanchez&family=Stick+No+Bills:wght@500&display=swap`} rel="stylesheet"/>
      </Head>

      

      <main className="main">   
           
        <div className="home-top" style={{display:"flex"}}>
          <TwitterBox/>
        
          <div className="current-events"> 
            <div className='category-header' style={{padding:"15px 0 0 50px"}}>Current Events </div>
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
