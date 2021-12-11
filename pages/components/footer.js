import Link from 'next/link'

export default function Footer() {
  return (
    
      <div className="footerwrap" style={{height:"108px",width:"100%",maxWidth:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #eaeaea", backgroundColor:"#FFFFFF", color:"#7A8398"}}>
        
        <div className="footer-left" style={{display:"flex", flexDirection:"column"}}>
            <div className="headerlogowrap" style={{paddingLeft:"20px",paddingTop:"20px", display:"flex", height:"auto", alignContent:"center", justifyContent:"center"}}>
                <Link href="/"><img src="/acorn-grey.svg" alt="Nutshell News Logo" className="headerlogo" style={{height:"35px", paddingRight:"15px", margin:"0 auto"}}/></Link>
                <Link href="/"><h1 className="headertitle" style={{fontSize: "200%", fontWeight:"bold", margin: "auto",fontFamily:"'Raleway', sans-serif"}}>
                    nutshell news
                </h1></Link>
            </div>
            <p style={{paddingLeft:"20px",paddingTop:"2.5px"}}>Copyright Nutshell News, 2021</p>
        </div>

        <ul className="headerbuttonslist" style={{display:"flex",listStyle:"none", width:"460px",justifyContent:"space-around", padding:"0px", flexWrap:"wrap", margin:"0"}}>
          <li className="headerbuttons" style={{fontSize: "100%", fontWeight: "400"}}><Link href="/">News</Link></li>
          <li className="headerbuttons" style={{fontSize: "100%", fontWeight: "400"}}><Link href="/life">Life</Link></li>
          <li className="headerbuttons" style={{fontSize: "100%", fontWeight: "400"}}><Link href="/academic">Academic</Link></li>
          <li className="headerbuttons" style={{fontSize: "100%", fontWeight: "400"}}><Link href="/readinglist">Readling List</Link></li>
          <li className="headerbuttons" style={{fontSize: "100%", fontWeight: "400"}}><Link href="/about">About</Link></li>
        </ul>

      </div>
    
)}