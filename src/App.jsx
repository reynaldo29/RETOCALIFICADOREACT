import { useState, useEffect } from "react";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { CardMovies } from "./components";
import { Container } from "@mui/material";
import { Navbar } from "./components/NavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Paginacion from "./components/Pagination";

import { TextField, Typography, Box} from "@mui/material";
import { get } from "./services";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  async function getMovies() {
    const movies = await get();
    setMovies(movies.entries);
    console.log(movies.entries);
  }

  const buscador = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    console.log(search);
   
  };


  //FILTRAR POR PELICULA
  let resultado = [];
  if (!search) {
    resultado = movies;
  } else {
    resultado = movies.filter((data) =>
      data.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getMovies();
  }, []);

  const themeColor = {
    body: {
      backgroundColor: "#1A1A1A"
    }
  };


	const [initialPage, setInitialPage] = useState(0);
	const [offsetPage, setOffsetPage] = useState(10);

	const handlePage = (initial, offset) => {
		setInitialPage(initial);
		setOffsetPage(offset);
	};



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={themeColor}/>
      <Navbar />
         <Search search={search} buscador={buscador}/>
         <Container
				css={{
					marginBottom: "2rem",
				}}
			>
        <CardMovies movies={resultado}
        	{...{ initialPage, offsetPage }} />
          <Paginacion handlePage ={handlePage}/>
        </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
