import Header from './components/header'
import HomeVerticals from './components/home-vertical-content'


export default function Life() {
  return (
    <div className="container">

      <main className="main">
        <Header/>
        
        <div className="home-content-wrap" style={{display:"flex"}}>
          <HomeVerticals/>
        </div>

      </main>


    </div>
  )
}
