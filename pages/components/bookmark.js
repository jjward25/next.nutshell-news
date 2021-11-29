export default function HomePostCard() {
 
    var postSelected = false;

    const bookmarkClick = e => {
        
        var postSelected = !postSelected;   

        if (postSelected === true) {
            var markImg = "/bookmark-unselected.svg"
        }
        else if (postSelected === false) {
            var markImg = "/bookmark-selected.svg"
        }

    }
 
    return (
 
        <div className="post-icon-bg" style={{backgroundColor:"#FFFFFF", height:"45px",width:"45px", marginBottom:"15px", padding:"10px 0"}}>
        
            <img src={markImg} alt="bookmark" style={{height:"25px",width:"25px",margin:"auto", display:"block"}} onClick={bookmarkClick()}/>
        
        </div>

    )
}