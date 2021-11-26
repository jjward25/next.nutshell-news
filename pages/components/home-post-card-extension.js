export default function HomePostCardExtension() {
    return (

        <div className="home-post-card-extension" style={{display:"flex", flexDirection:"colum",
                                                          width:"350px",height:"auto", 
                                                          backgroundColor:"#FFFFFF", borderRadius:"4px",
                                                          margin:"0 0 0 30px"}}>
    
            <div className="subheader" style={{display:"flex"}}>
                <img src="/acorn.svg" alt="acorn" style={{height:"20px",margin:"5px 0 5px 15px"}}/>
                <div className="subheader-text" style={{margin:"5px 0 10px 15px"}}>
                    Subheader Text
                </div>
            </div>

        </div>

    )
}