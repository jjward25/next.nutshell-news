import HomePostCard from "./home-post-card";
import HomePostCardExtension from "./home-post-card-extension";
import '../styles/Home.module.css'

export default function HomeVerticals() {
    return (

        <div className="category-home-vertical" style={{display:"flex", flexDirection:"column"}}>
    
            <div className='category-header' style={{padding:"15px 0 0 30px"}}>Ongoing News</div>
            <div className='home-posts-wrap'>
                <HomePostCard/>
                <HomePostCardExtension/>
            </div>

        </div>

    )
}