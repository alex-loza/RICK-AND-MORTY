import Card from '../card/Card';
import styles from "./Cards.module.css"


export default function Cards(props) {
   // console.log(props)
   const { characters } = props;
   return <div className={styles.container}>
     {characters.map(character => <Card
      key = {character.name}
      name = {character.name}
      species = {character.species}
      gender = {character.gender}
      image = {character.image}
      onClose = {()=>alert('Emulamos que se cierra la card')}
     />)}
   </div>;
}
