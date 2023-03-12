import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}><button onClick={props.onClose}className={styles.button}>X</button></div>
         <div className={styles.imgContainer}><img  src={props.image} alt={props.name} />
         <h2 className={styles.name}>{props.name}</h2>
         </div>
         <div className={styles.propsContainer}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
