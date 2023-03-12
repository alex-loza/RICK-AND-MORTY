import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props
   return (
      <div className={styles.bar}>
         <input type='search' />
      <button onClick={()=>onSearch('futuro ID')}>Agregar</button>
      </div>
   );
}
