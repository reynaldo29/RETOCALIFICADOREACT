import { useState, useEffect } from "react";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { CardMovies, LabelMovie } from "./components";
import { Container, InputLabel } from "@mui/material";
import { get } from "./services";
import "./App.css";

function App() {

  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const movies = await get();
    setMovies(movies.entries);
  }

  useEffect(() => {
    // llamo a la funciona
    getMovies();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "Black" },
        }}
      />
      <Container>
        <LabelMovie />
        <CardMovies movies={movies} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
