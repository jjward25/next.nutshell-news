import styles from '../styles/Home.module.css';
import Header from './components/header';
import HomePostCard from './components/home-post-card';
import HomePostCardExtension from './components/home-post-card-extension';


export default function About() {
  return (
    <div className="container">

      <main className="main">
        <Header/>
        
        <div className="search-content-wrap" style={{display:"flex", flexDirection:"column", width:"850px", backgroundColor:"#FFFFFF", margin:"0 auto", padding:"15px"}}>
            <div className="title-header" style={{padding:"15px 30px 5px 30px"}}>Nutshell News</div>
            <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Adult Education</div>
            <p className="about-text" style={{padding:"15px 30px 5px 30px"}}>
              To us, The News should be relevant, it should be useful, and it should be easy to follow.  So we tailor our News coverage a little differently,
              and include Life and Academic sections for you to learn about things that are more immediately useful for you than traditional news.
              <br/><br/>
              We want to make it as easy as possible to keep up with the world. That's why we publish only one article for each topic, in a simple bulleted 
              format.
              <br/><br/>
              Google and Apple aggregate headlines, we aggregate information
            </p>
            <div className="category-header" style={{padding:"15px 30px 5px 30px"}}>Your Reading List</div>
            <p className="about-text" style={{padding:"15px 30px 5px 30px"}}>
              To make things even easier, you can track articles so that new bullets will show up in your Reading List.  This way you read one article, once, 
              then get new updates on issues you care about directly in your Reading List, without having to skim the whole article again.
              <br/><br/>
              This is smarter coverage for smarter people to promote better living.  This is Adult Education - detailed, useful information with no agenda or slant.
              <br/><br/>
              Casually Adept is news for people who hate the news.
            </p>
        </div>

      </main>


    </div>
  )
}
