
const Search = ({ className = "", onChange }) => {
  return (<input className={`${className} rounded border border-gray-300 px-4`} placeholder="Search" onChange={onChange}/>);
}

export default Search;