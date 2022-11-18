import "./pagination.css";
const Paginacion = ({ handlePage }) => {
  return (
    <div className="separate">
      <button className="pagination" onClick={() => handlePage(0, 10)}>
        1
      </button>
      <button className="pagination" onClick={() => handlePage(10, 20)}>
        2
      </button>
      <button className="pagination" onClick={() => handlePage(20, 30)}>
        3
      </button>
    </div>
  );
};

export default Paginacion;
