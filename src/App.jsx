import { useState, useEffect } from "react";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { CardMovies } from "./components";
import { Container } from "@mui/material";

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "black" },
        }}
      />
      <Container>
        <Box mt={5}>
          <Typography color="primary" variant="h4" mb={3}>
            Peliculas
          </Typography>
          <TextField
            value={search}
            onChange={buscador}
            sx={{
              "& > :not(style)": { m: 1, width: "130ch" },
              input: { color: '#ffff' }
            }}
            id="outlined-basic"
            variant="outlined"
          />
        </Box>
        <CardMovies movies={resultado} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
