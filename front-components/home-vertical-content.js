import HomePostCard from "./home-post-card";
import styles from '../styles/Components.module.scss';


export default function HomeVerticals() {
    return (

        <div className={styles['category-home-vertical']}>
    
            <div className={styles['font-category-header']}>Ongoing News</div>
            <div className={styles['home-posts-wrap']}>
                <HomePostCard/>
            </div>

        </div>

    )
}