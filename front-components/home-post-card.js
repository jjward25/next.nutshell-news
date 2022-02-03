export default function HomePostCard() {
    return (

    <div className="full-home-card">

        <div className="home-post-card" style={{display:"flex", width:"350px",height:"60px", margin:"15px 0 0 30px", backgroundColor:"#FFFFFF", borderRadius:"4px"}}>
    
            <div className='post-card-bookmark' style={{margin:"auto 18px", paddingTop:"6px"}}>
                <img src="/bookmark-unselected.svg" alt="bookmark" style={{}}/>
            </div>
    
            <div className='post-title' style={{fontSize:"20px", fontWeight:"600", margin:"auto 0", width:"100%"}}>Post Title </div>
    
            <div className="post-card-carrot" style={{margin:"auto 15px", display:"flex", justifyContent:"flex-end", width:"auto"}}>
                <img src="/arrow-right.png" alt="carrot" style={{height:"20px", paddingTop:"6px", width:"auto"}}/>
            </div>

        </div>

    </div>
    )
}