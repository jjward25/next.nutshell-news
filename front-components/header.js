import Link from 'next/link'
import styles from '../styles/Components.module.scss';
import Image from 'next/image';

export default function HeaderMenu() {
  return (
    
      <div className={styles['headerwrap']} >
        <div className={styles['headerlogowrap']}>
          <Link href="/"><img src="/acorn.svg" alt="Nutshell News Logo" className="headerlogo" style={{height:"35px",paddingLeft:"15px", paddingRight:"15px", margin:"0 auto"}}/></Link>
          <Link href="/">
            <h1 className={styles['headertitle']}>
            nutshell news</h1>
          </Link>
        </div>

        <ul className={styles['headerbuttonslist']} >
          <li className={styles['headerbuttons']} ><Link href="/">News</Link></li>
          <li className={styles['headerbuttons']}><Link href="/life">Life</Link></li>
          <li className={styles['headerbuttons']}><Link href="/academic">Academic</Link></li>
          <li className={styles['headerbuttons']}><Link href="/readinglist">Readling List</Link></li>
          <li className={styles['headerbuttons']}><Link href="/about">About</Link></li>
        </ul>

        <div className={styles['headersearchwrap']} >
          <span className={styles['search-icon-wrap']}>
            <Image src="/searchicon.svg" alt="search" layout='fill'/>
          </span>
          <Link href="/search"><p className={styles['headersearchtext']}> Search</p></Link>
        </div>
        <div className={styles['headerlogin']}>Login</div>

      </div>
    
)}