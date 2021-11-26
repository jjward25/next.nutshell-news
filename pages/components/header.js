export default function HeaderMenu() {
  return (
    
      <main className="headerwrap" style={{height:"60px",width:"100vw",maxWidth:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eaeaea", backgroundColor:"#FFFFFF"}}>
        <div className="headerlogowrap" style={{paddingLeft:"15px", display:"flex", height:"auto", alignContent:"center", justifyContent:"center"}}>
          <img src="/acorn.svg" alt="Nutshell News Logo" className="headerlogo" style={{height:"35px",paddingLeft:"15px", paddingRight:"15px", margin:"0 auto"}}></img>
          <h1 className="headertitle" style={{fontSize: "200%", fontWeight:"bold", margin: "auto",fontFamily:"'Raleway', sans-serif"}}>
            nutshell news
          </h1>
        </div>

        <ul className="headerbuttonslist" style={{display:"flex",listStyle:"none", width:"45vw",justifyContent:"space-between", padding:"0px", flexWrap:"wrap"}}>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}>News</li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}>Life</li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}>Academic</li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}>Readling List</li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}>About</li>
        </ul>

        <div className="headersearchwrap" style={{height:"35px", width:"250px", backgroundColor:"lightgray", fontWeight:"600", display:"flex",borderRadius:"8px"}}>
          <img src="/searchicon.svg" alt="search" className="headersearchicon" style={{padding:"5px"}}/>
          <p className="headersearchtext" style={{margin:"auto",marginLeft:"0", textAlign:"left"}}> Search</p>
        </div>
        <div className="headerlogin" style={{height:"35px", width:"90px",borderRadius:"8px", textAlign:"center",fontSize:"125%", fontWeight:"400",backgroundColor:"#1AC182", color:"white",marginRight:"15px"}}>Login</div>

      </main>
    
)}