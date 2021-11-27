import styles from '../styles/Home.module.css'
import Header from './components/header'
import HomePostCard from './components/home-post-card';


export default function Article() {
  return (
    <div className="container">

      <main className="main">
        <Header/>
        
        <div className="home-content-wrap" style={{display:"flex"}}>

            <div className="related-posts">
                <div className='category-header' style={{padding:"20px 0 5px 30px"}}>Related Posts</div>
                <div className='home-posts-wrap'>
                    <HomePostCard/>
                </div>
            </div>

            <div className="article-main-card" style={{width:"850px",backgroundColor:"#FFFFFF", margin:"73px 40px", borderRadius:"4px", padding:"30px 30px"}}>
                
                <div className="post-category-text" style={{color:'#7A8398',fontSize:"15px", fontWeight:"500", fontFamily:"'Montserrat', sans-serif", marginBottom:"10px"}}>POLICY ISSUES</div>
                
                <div className="title-header" style={{margin:"0 -4px 15px -4px"}}>{`The Trump & GOP Tax Cuts`}</div>

                <div className="post-intro-text" style={{fontFamily:"'Montserrat', sans-serif",color:"#364463", fontSize:"17px", lineHeight:"24px", paddingBottom:"25px"}}>
                        Text lorum ipsum this is an article about latin language influence text philosophy text introduction summary recap.
                        Text lorum ipsum this is an article about latin language influence text philosophy text introduction summary recap.Text lorum ipsum this is an article about latin language influence text philosophy text introduction summary.
                </div>

                <div className="subheader-accordion-closed" style={{color:"#2F4454", borderTop:"3px #F4F7F9 solid", padding:"10px", display:"flex"}}>
                    <p className="subheader-text" style={{fontFamily:"'Montserrat', sans-serif", fontSize:"18px", fontWeight:"700", margin:"0", width:"100%"}}>Subheader title</p>
                    <img src="/purple-arrow-right.png" alt="carrot" style={{display:"flex", justifyContent:"flex-end", opacity:".6", width:"9px",height:"15px"}}/>
                </div>
                <div className="subheader-accordion-open" style={{color:"#2F4454", borderTop:"3px #F4F7F9 solid", borderBottom:"3px #F4F7F9 solid", padding:"10px", display:"flex", margin:"0 0 20px 0"}}>
                    <p className="subheader-text" style={{fontFamily:"'Montserrat', sans-serif", fontSize:"18px", fontWeight:"700", margin:"0", width:"100%"}}>Open subheader title</p>
                    <img src="/purple-arrow-down.png" alt="carrot" style={{display:"flex", justifyContent:"flex-end", opacity:".6", width:"15px",height:"9px", margin:"auto"}}/>
                </div>

                <div className="article-bullet-text" style={{display:"flex", marginBottom:"25px"}}>
                    <img src="/acorn.svg" alt="acorn" className="article-bullet-icon" style={{width:"13px",height:"19px"}}/>
                    <div className="article-bullet-text-wrap" style={{}}>
                        <div className="article-bullet-main" style={{margin:"0 0 0 15px", fontSize:"17px", height:"auto",fontFamily:"'Montserrat', sans-serif",color:"#364463"}}>
                            Article bullet text.  This is a sentence or two about the post topic.  It could be one short line, or potentially multiple lines.  There will always be a 
                            citation after the bullet text.
                        </div>
                        <div className="article-bullet-citation" style={{margin:"15px 0 0 15px", fontSize:"12px", color:"#7621D8",fontFamily:"'Montserrat', sans-serif",fontWeight:"bold"}}>
                            Citation
                        </div>
                    </div>
                </div>
                <div className="article-bullet-text" style={{display:"flex", marginBottom:"25px"}}>
                    <img src="/acorn.svg" alt="acorn" className="article-bullet-icon" style={{width:"13px",height:"19px"}}/>
                    <div className="article-bullet-text-wrap" style={{}}>
                        <div className="article-bullet-main" style={{margin:"0 0 0 15px", fontSize:"17px", height:"auto",fontFamily:"'Montserrat', sans-serif",color:"#364463"}}>
                            Article bullet text.  This is a sentence or two about the post topic.  It could be one short line, or potentially multiple lines.  There will always be a 
                            citation after the bullet text. Article bullet text.  This is a sentence or two about the post topic.  It could be one short line, or potentially multiple lines.  There will always be a 
                            citation after the bullet text. Article bullet text.  This is a sentence or two about the post topic.  It could be one short line, or potentially multiple lines.  There will always be a 
                            citation after the bullet text.
                        </div>
                        <div className="article-bullet-citation" style={{margin:"15px 0 0 15px", fontSize:"12px", color:"#7621D8",fontFamily:"'Montserrat', sans-serif",fontWeight:"bold"}}>
                            Citation
                        </div>
                    </div>
                </div>
                <div className="article-bullet-text" style={{display:"flex", marginBottom:"25px"}}>
                    <img src="/acorn.svg" alt="acorn" className="article-bullet-icon" style={{width:"13px",height:"19px"}}/>
                    <div className="article-bullet-text-wrap" style={{}}>
                        <div className="article-bullet-main" style={{margin:"0 0 0 15px", fontSize:"17px", height:"auto",fontFamily:"'Montserrat', sans-serif",color:"#364463"}}>
                            Article bullet text.  This is a sentence or two about the post topic.  It could be one short line, or potentially multiple lines.  There will always be a 
                            citation after the bullet text.
                        </div>
                        <div className="article-bullet-citation" style={{margin:"15px 0 0 15px", fontSize:"12px", color:"#7621D8",fontFamily:"'Montserrat', sans-serif",fontWeight:"bold"}}>
                            Citation
                        </div>
                    </div>
                </div>

                <div className="subheader-accordion-closed" style={{color:"#2F4454", borderTop:"3px #F4F7F9 solid", padding:"10px", display:"flex"}}>
                    <p className="subheader-text" style={{fontFamily:"'Montserrat', sans-serif", fontSize:"18px", fontWeight:"700", margin:"0", width:"100%"}}>Subheader title</p>
                    <img src="/purple-arrow-right.png" alt="carrot" style={{display:"flex", justifyContent:"flex-end", opacity:".6", width:"9px",height:"15px"}}/>
                </div>
                <div className="subheader-accordion-closed" style={{color:"#2F4454", borderTop:"3px #F4F7F9 solid", padding:"10px", display:"flex"}}>
                    <p className="subheader-text" style={{fontFamily:"'Montserrat', sans-serif", fontSize:"18px", fontWeight:"700", margin:"0", width:"100%"}}>Subheader title</p>
                    <img src="/purple-arrow-right.png" alt="carrot" style={{display:"flex", justifyContent:"flex-end", opacity:".6", width:"9px",height:"15px"}}/>
                </div>
                <div className="subheader-accordion-closed" style={{color:"#2F4454", borderTop:"3px #F4F7F9 solid", padding:"10px", display:"flex"}}>
                    <p className="subheader-text" style={{fontFamily:"'Montserrat', sans-serif", fontSize:"18px", fontWeight:"700", margin:"0", width:"100%"}}>Subheader title</p>
                    <img src="/purple-arrow-right.png" alt="carrot" style={{display:"flex", justifyContent:"flex-end", opacity:".6", width:"9px",height:"15px"}}/>
                </div>
            
                <div className="article-content-bottom-border" style={{borderTop:"3px #F4F7F9 solid"}}></div>

            </div>

            <div className="post-social-icons" style={{display:"flex", flexDirection:"column", marginTop:"73px"}}>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/bookmark-unselected.svg" alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/share.png" alt="share" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/comment.png" alt="comment" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
                <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
                    <img src="/feedback.png" alt="feedback" style={{height:"25px",width:"25px",margin:"auto", display:"block"}}/>
                </div>
            </div>

        </div>

      </main>


    </div>
  )
}
