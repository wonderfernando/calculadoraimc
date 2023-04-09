import {Levels} from "../../helpers/imc";

import upimg from "../../assets/up.png";
import downimg from "../../assets/down.png";
import styles from "./GridItem.module.css";
export const GridItem = ({item} : {item: Levels}) => {
    return (
        <div style={{backgroundColor: item.color}} className={styles.main}>
           <div className={styles.gridIcon}>
                {item.icon==="up" && <img width="100px" src={upimg} /> }
                {item.icon==="down" && <img width="100px"  src={downimg} /> }
           </div>
           <div className={styles.gridTitle}>
                {item.title}
           </div>
           {item.yourimc && <div className={styles.yourimc}>Seu imc é de: {item.yourimc}</div>}
           <div className={styles.gridInfo}>
                <>O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
           </div>
        </div>
    )
}