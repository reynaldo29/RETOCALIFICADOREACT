import { InputLabel, FormControl, Typography, Box } from "@mui/material";

const LabelMovie = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" mb={3}>
        Peliculas
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Title</InputLabel>
      </FormControl>
    </Box>
  );
};

export default LabelMovie;
