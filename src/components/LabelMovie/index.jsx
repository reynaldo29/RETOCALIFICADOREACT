import * as React from 'react';
import { TextField, Typography, Box} from "@mui/material";

const LabelMovie = (buscador,setSearch) => {

  const buscador = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box mt={5}>
      <Typography color= "primary" variant="h4" mb={3}>
        Peliculas
      </Typography>
 
       <TextField value ={search} onChange={buscador}  sx={{
        '& > :not(style)': { m: 1, width: '130ch' },
      }} id="outlined-basic" variant="outlined" />
    
    </Box>
  );
};

export default LabelMovie;
