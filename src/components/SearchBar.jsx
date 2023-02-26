export default function SearchBar(props) {
   // console.log(props)
   const {onSearch} = props
   return (
      <div>
         <input type='search' />
      <button onClick={()=>onSearch('futuro ID')}>Agregar</button>
      </div>
   );
}
