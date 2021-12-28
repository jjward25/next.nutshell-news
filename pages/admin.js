import { useState } from 'react';

export default function Admin() {

    const [newBullet,setNewBullet] = useState({
        section:"Section",
        category:"Category",
        post:"Post",
        postImgSrc:"/postimgs/",
        postDate:"01/01/21",
        postStatus:"Draft",
        postID:"1",
        lastUpdate:"",
        subheader:"Subheader",
        bulletText:"",
        bulletCite:"",
        bulletLink:"",
        bulletPriority:"",
        bulletPostDate:""
        });

    const objUpdate = (name) => {
        return ({target: {value}}) => {
            setNewBullet(oldValues => ({...oldValues,[name]:value}));
        }
    }

    return (
    
    <div className="container">
        <head>
            <title>Admin Panel</title>
            <meta name="" content="one,two"
        </head>
        <main className="main">
        
        <div className="admin-content-wrap" style={{display:"flex", flexDirection:"column", width:"850px", backgroundColor:"#FFFFFF", margin:"0 auto", padding:"15px"}}>
            <form>
                <div className="title-header" style={{padding:"15px 30px 5px 30px"}}>Nutshell News</div>
                
                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Section</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.section} style={{width:"100%"}} onChange={objUpdate('section')}/>
                    </div>
                </div>

                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Category</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.category} style={{width:"100%"}} onChange={objUpdate('category')}/>
                    </div>
                </div>

                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Post</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.post} style={{width:"100%"}} onChange={objUpdate('post')}/>
                    </div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.postImgSrc} style={{width:"100%"}} onChange={objUpdate('postImgSrc')}/>
                    </div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.postStatus} style={{width:"100%"}} onChange={objUpdate('postStatus')}/>
                    </div>
                </div>

                <div className='form item'>
                    <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Subheader</div>
                    <div className="about-text" style={{padding:"15px 30px 5px 30px", width:"100%"}}>
                        <input type="text" value={newBullet.subheader} style={{width:"100%"}} onChange={objUpdate('subheaders')}/>
                    </div>
                </div>

            </form>
        </div>

      </main>

    </div>

  )
}
