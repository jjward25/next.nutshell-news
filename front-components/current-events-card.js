export default function CurrentEvents() {
    return (
        <div className="current-events-card" style={{width:"530px", height: "195px", backgroundColor:"#FFFFFF", margin:"15px 0 0 50px", borderRadius:"4px"}}>
            <div className="ce-card-header" style={{display:"flex", justifyContent:"space-between"}}>
                <div className="ce-card-subheader" style={{color:"#1AC182",backgroundColor:"#DBF2E9", height:"25px", width:"145px", borderRadius:"4px", margin:"15px 0 0 15px"}}>
                    <div className="subheader-text" style={{fontFamily:"'Montserrat',SemiBold", textAlign:"center", margin:"4px auto"}}>HEADLINE NEWS</div>
                </div>
                <div className="ce-card-postdate" style={{margin:"15px 15px 0 0"}}>5/5/2020</div>
            </div>
            <div className="ce-card-main" style={{margin:"15px 0 0 15px", fontSize:"16px", height:"100px"}}>
                Current Events
            </div>
            <div className="ce-card-citation" style={{margin:"15px 0 0 15px", fontSize:"12px", color:"#7621D8"}}>
                Citation
            </div>
        </div>
    )
}