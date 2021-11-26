import styles from '../styles/Home.module.css'
import Header from './components/header'
import HomePostCard from './components/home-post-card';
import HomePostCardExtension from './components/home-post-card-extension';


export default function Article() {
  return (
    <div className={styles.container}>

      <main className="main" style={{backgroundColor:"#F4F7F9", height:"100vh"}}>
        <Header/>
        
        <div className="home-content-wrap" style={{display:"flex"}}>

            <div className="related-posts">
                <div className='category-header' style={{padding:"20px 0 5px 30px"}}>Related Posts</div>
                <div className='home-posts-wrap'>
                    <HomePostCard/>
                </div>
            </div>

            <div className="article-main-card" style={{width:"850px",backgroundColor:"#FFFFFF", margin:"73px 40px", borderRadius:"4px"}}>
                t           
            </div>

            <div className="post-social-icons" style={{display:"flex", flexDirection:"column", marginTop:"73px"}}>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/bookmark-unselected.svg" alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/bookmark-unselected.svg" alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/bookmark-unselected.svg" alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/bookmark-unselected.svg" alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
            </div>

        </div>

      </main>


    </div>
  )
}
