import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './components/header';
import HomePostCard from './components/home-post-card';
import HomePostCardExtension from './components/home-post-card-extension';


export default function Admin() {

    const [postDetails,setPostDetails] = useState({
        section:"Section",
        category:"Category",
        post:"Post",
        postImgSrc:"",
        postDate:"",
        postID:"",
        lastUpdate:"",
        trackedBy:
            [{
                userList:[],
                dateTracked:[]
            }],
        content:{
            subheader:
                [{
                    bulletText:"",
                    bulletCite:"",
                    bulletLink:"",
                    bulletPriority:"",
                    bulletPostDate:""
                }]
        }   
    });


    return (
    
    <div className="container">

      <main className="main">
        
        <div className="admin-content-wrap" style={{display:"flex", flexDirection:"column", width:"850px", backgroundColor:"#FFFFFF", margin:"0 auto", padding:"15px"}}>
            <form>
                <div className="title-header" style={{padding:"15px 30px 5px 30px"}}>Nutshell News</div>
                
                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Section</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={postDetails.section} style={{width:"100%"}}/>
                    </div>
                </div>

                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Category</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={postDetails.category} style={{width:"100%"}}/>
                    </div>
                </div>

                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Post</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={postDetails.post} style={{width:"100%"}}/>
                    </div>
                </div>

            </form>
        </div>

      </main>

    </div>

  )
}
