import styles from '../styles/Components.module.scss';
import Image from 'next/image';

export default function HomePostCard() {
    return (

    <div className={styles['full-home-card']}>

        <div className={styles['home-post-card']}>
    
            <div className={styles['post-card-bookmark']} >
                <Image src="/bookmark-unselected.svg" alt="bookmark" layout='fill'/>
            </div>
    
            <div className={styles['post-title']} >Post Title </div>
    
            <div className={styles['post-card-carot']} >
                <Image src="/arrow-right.png" alt="carot" layout='fill'/>
            </div>

        </div>

    </div>
    )
}