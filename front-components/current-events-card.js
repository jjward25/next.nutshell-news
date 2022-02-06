import styles from '../styles/Components.module.scss';

export default function CurrentEvents() {
    return (

        <div className={styles['current-events']}> 

            <div className={styles['font-category-header']}>Current Events </div>

                <div className={styles['ce-card-wrap']}>

                    <div className={styles['current-events-card']}>

                        <div className={styles['ce-card-header']} >
                            <div className={styles['ce-card-subheader']}>
                                <div className={styles['subheader-text']}>HEADLINE NEWS</div>
                            </div>
                            <div className={styles['ce-card-postdate']}>5/5/2020</div>
                        </div>

                        <div className={styles['ce-card-main']} >
                            Current Events
                        </div>

                        <div className={styles['ce-card-citation']} >
                            Citation
                        </div>

                    </div>  

                </div>

          </div>
    )
}