import styles from '../styles/Home.module.css';
import Header from './components/header';
import HomePostCard from './components/home-post-card';
import HomePostCardExtension from './components/home-post-card-extension';


export default function Search() {
  return (
    <div className={styles.container}>

      <main className="main" style={{backgroundColor:"#F4F7F9", height:"100vh"}}>
        <Header/>
        
        <div className="search-content-wrap" style={{display:"flex", flexWrap:"wrap"}}>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
          <div className="search-result-card">
            <HomePostCard/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
            <HomePostCardExtension/>
          </div>
        </div>

      </main>


    </div>
  )
}
