import "./search.css";
const Search = ({ search, buscador }) => {
  return (
    <div className="container_search">
      <input value={search} onChange={buscador} className="bar_search" />
    </div>
  );
};

export default Search;
