import Link from 'next/link'

export default function HeaderMenu() {
  return (
    
      <div className="headerwrap" style={{height:"60px",width:"100%",maxWidth:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eaeaea", backgroundColor:"#FFFFFF"}}>
        <div className="headerlogowrap" style={{paddingLeft:"15px", display:"flex", height:"auto", alignContent:"center", justifyContent:"center"}}>
          <Link href="/"><img src="/acorn.svg" alt="Nutshell News Logo" className="headerlogo" style={{height:"35px",paddingLeft:"15px", paddingRight:"15px", margin:"0 auto"}}/></Link>
          <Link href="/"><h1 className="headertitle" style={{fontSize: "200%", fontWeight:"bold", margin: "auto",fontFamily:"'Raleway', sans-serif"}}>
            nutshell news
          </h1></Link>
        </div>

        <ul className="headerbuttonslist" style={{display:"flex",listStyle:"none", width:"45vw",justifyContent:"space-between", padding:"0px", flexWrap:"wrap"}}>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}><Link href="/">News</Link></li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}><Link href="/life">Life</Link></li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}><Link href="/academic">Academic</Link></li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}><Link href="/readinglist">Readling List</Link></li>
          <li className="headerbuttons" style={{fontSize: "125%", fontWeight: "400"}}><Link href="/about">About</Link></li>
        </ul>

        <div className="headersearchwrap" style={{height:"35px", width:"250px", backgroundColor:"#E8EFEE", fontWeight:"600", display:"flex",borderRadius:"8px"}}>
          <img src="/searchicon.svg" alt="search" className="headersearchicon" style={{padding:"5px"}}/>
          <Link href="/search"><p className="headersearchtext" style={{margin:"auto",marginLeft:"0",paddingLeft:"2%", textAlign:"left",color:"#BCC1CB"}}> Search</p></Link>
        </div>
        <div className="headerlogin" style={{height:"35px", width:"90px",borderRadius:"8px", textAlign:"center",fontSize:"125%", fontWeight:"400",backgroundColor:"#1AC182", color:"white",marginRight:"15px"}}>Login</div>

      </div>
    
)}